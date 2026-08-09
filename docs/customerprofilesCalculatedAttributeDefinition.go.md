# `customerprofilesCalculatedAttributeDefinition` Submodule <a name="`customerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesCalculatedAttributeDefinition <a name="CustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinition(scope Construct, id *string, config CustomerprofilesCalculatedAttributeDefinitionConfig) CustomerprofilesCalculatedAttributeDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig">CustomerprofilesCalculatedAttributeDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig">CustomerprofilesCalculatedAttributeDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails">PutAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData">ResetUseHistoricalData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeDetails` <a name="PutAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails"></a>

```go
func PutAttributeDetails(value CustomerprofilesCalculatedAttributeDefinitionAttributeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions"></a>

```go
func PutConditions(value CustomerprofilesCalculatedAttributeDefinitionConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUseHistoricalData` <a name="ResetUseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData"></a>

```go
func ResetUseHistoricalData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomerprofilesCalculatedAttributeDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">AttributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness">Readiness</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput">AttributeDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput">CalculatedAttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput">UseHistoricalDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">CalculatedAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">UseHistoricalData</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeDetails`<sup>Required</sup> <a name="AttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```go
func AttributeDetails() CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```go
func Conditions() CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Readiness`<sup>Required</sup> <a name="Readiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```go
func Readiness() CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```go
func Tags() CustomerprofilesCalculatedAttributeDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `AttributeDetailsInput`<sup>Optional</sup> <a name="AttributeDetailsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput"></a>

```go
func AttributeDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `CalculatedAttributeNameInput`<sup>Optional</sup> <a name="CalculatedAttributeNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput"></a>

```go
func CalculatedAttributeNameInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseHistoricalDataInput`<sup>Optional</sup> <a name="UseHistoricalDataInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput"></a>

```go
func UseHistoricalDataInput() interface{}
```

- *Type:* interface{}

---

##### `CalculatedAttributeName`<sup>Required</sup> <a name="CalculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```go
func CalculatedAttributeName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `UseHistoricalData`<sup>Required</sup> <a name="UseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```go
func UseHistoricalData() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails {
	Attributes: interface{},
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes">Attributes</a></code> | <code>interface{}</code> | A list of attribute items specified in the mathematical expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression">Expression</a></code> | <code>*string</code> | Mathematical expression that is performed on attribute items provided in the attribute list. |

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes"></a>

```go
Attributes interface{}
```

- *Type:* interface{}

A list of attribute items specified in the mathematical expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CustomerprofilesCalculatedAttributeDefinition#attributes}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Mathematical expression that is performed on attribute items provided in the attribute list.

Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CustomerprofilesCalculatedAttributeDefinition#expression}

---

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name">Name</a></code> | <code>*string</code> | The name of an attribute defined in a profile object type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of an attribute defined in a profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#name CustomerprofilesCalculatedAttributeDefinition#name}

---

### CustomerprofilesCalculatedAttributeDefinitionConditions <a name="CustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionConditions {
	ObjectCount: *f64,
	Range: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange,
	Threshold: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount">ObjectCount</a></code> | <code>*f64</code> | The number of profile objects used for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | The relative time period over which data is included in the aggregation. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | The threshold for the calculated attribute. |

---

##### `ObjectCount`<sup>Optional</sup> <a name="ObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount"></a>

```go
ObjectCount *f64
```

- *Type:* *f64

The number of profile objects used for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CustomerprofilesCalculatedAttributeDefinition#object_count}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range"></a>

```go
Range CustomerprofilesCalculatedAttributeDefinitionConditionsRange
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

The relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#range CustomerprofilesCalculatedAttributeDefinition#range}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold"></a>

```go
Threshold CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

The threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CustomerprofilesCalculatedAttributeDefinition#threshold}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange {
	TimestampFormat: *string,
	TimestampSource: *string,
	Unit: *string,
	Value: *f64,
	ValueRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | The format the timestamp field in your JSON object is specified. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource">TimestampSource</a></code> | <code>*string</code> | An expression specifying the field in your JSON object from which the date should be parsed. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit">Unit</a></code> | <code>*string</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value">Value</a></code> | <code>*f64</code> | The amount of time of the specified unit. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | A structure specifying the endpoints of the relative time period over which data is included in the aggregation. |

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

The format the timestamp field in your JSON object is specified.

This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CustomerprofilesCalculatedAttributeDefinition#timestamp_format}

---

##### `TimestampSource`<sup>Optional</sup> <a name="TimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource"></a>

```go
TimestampSource *string
```

- *Type:* *string

An expression specifying the field in your JSON object from which the date should be parsed.

The expression should follow the structure of "{ObjectTypeName.<Location of timestamp field in JSON pointer format>}". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CustomerprofilesCalculatedAttributeDefinition#timestamp_source}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CustomerprofilesCalculatedAttributeDefinition#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange"></a>

```go
ValueRange CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

A structure specifying the endpoints of the relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CustomerprofilesCalculatedAttributeDefinition#value_range}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange {
	End: *f64,
	Start: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end">End</a></code> | <code>*f64</code> | The ending point for this range. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start">Start</a></code> | <code>*f64</code> | The starting point for this range. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end"></a>

```go
End *f64
```

- *Type:* *f64

The ending point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#end CustomerprofilesCalculatedAttributeDefinition#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start"></a>

```go
Start *f64
```

- *Type:* *f64

The starting point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#start CustomerprofilesCalculatedAttributeDefinition#start}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator">Operator</a></code> | <code>*string</code> | The operator of the threshold. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value">Value</a></code> | <code>*string</code> | The value of the threshold. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CustomerprofilesCalculatedAttributeDefinition#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

### CustomerprofilesCalculatedAttributeDefinitionConfig <a name="CustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AttributeDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails,
	CalculatedAttributeName: *string,
	DomainName: *string,
	Statistic: *string,
	Conditions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions,
	Description: *string,
	DisplayName: *string,
	Tags: interface{},
	UseHistoricalData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails">AttributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName">CalculatedAttributeName</a></code> | <code>*string</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic">Statistic</a></code> | <code>*string</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData">UseHistoricalData</a></code> | <code>interface{}</code> | Whether to use historical data for the calculated attribute. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeDetails`<sup>Required</sup> <a name="AttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails"></a>

```go
AttributeDetails CustomerprofilesCalculatedAttributeDefinitionAttributeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `CalculatedAttributeName`<sup>Required</sup> <a name="CalculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName"></a>

```go
CalculatedAttributeName *string
```

- *Type:* *string

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions"></a>

```go
Conditions CustomerprofilesCalculatedAttributeDefinitionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `UseHistoricalData`<sup>Optional</sup> <a name="UseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData"></a>

```go
UseHistoricalData interface{}
```

- *Type:* interface{}

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

### CustomerprofilesCalculatedAttributeDefinitionReadiness <a name="CustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness {

}
```


### CustomerprofilesCalculatedAttributeDefinitionTags <a name="CustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

&customerprofilescalculatedattributedefinition.CustomerprofilesCalculatedAttributeDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#key CustomerprofilesCalculatedAttributeDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```go
func Get(index *f64) CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes"></a>

```go
func PutAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```go
func Attributes() CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount">ResetObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange"></a>

```go
func PutRange(value CustomerprofilesCalculatedAttributeDefinitionConditionsRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold"></a>

```go
func PutThreshold(value CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `ResetObjectCount` <a name="ResetObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount"></a>

```go
func ResetObjectCount()
```

##### `ResetRange` <a name="ResetRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput">ObjectCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput">RangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">ObjectCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```go
func Range() CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```go
func Threshold() CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `ObjectCountInput`<sup>Optional</sup> <a name="ObjectCountInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput"></a>

```go
func ObjectCountInput() *f64
```

- *Type:* *f64

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput"></a>

```go
func RangeInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```go
func ObjectCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource">ResetTimestampSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange"></a>

```go
func PutValueRange(value CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTimestampSource` <a name="ResetTimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource"></a>

```go
func ResetTimestampSource()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange"></a>

```go
func ResetValueRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput">TimestampSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">TimestampSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```go
func ValueRange() CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TimestampSourceInput`<sup>Optional</sup> <a name="TimestampSourceInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput"></a>

```go
func TimestampSourceInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput"></a>

```go
func ValueRangeInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TimestampSource`<sup>Required</sup> <a name="TimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```go
func TimestampSource() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput">EndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput">StartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">End</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">Start</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput"></a>

```go
func EndInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput"></a>

```go
func StartInput() *f64
```

- *Type:* *f64

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```go
func End() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```go
func Start() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">ProgressPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ProgressPercentage`<sup>Required</sup> <a name="ProgressPercentage" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```go
func ProgressPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomerprofilesCalculatedAttributeDefinitionReadiness
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### CustomerprofilesCalculatedAttributeDefinitionTagsList <a name="CustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesCalculatedAttributeDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```go
func Get(index *f64) CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofilescalculatedattributedefinition"

customerprofilescalculatedattributedefinition.NewCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



