# `iotsitewiseAssetModel` Submodule <a name="`iotsitewiseAssetModel` Submodule" id="@cdktn/provider-awscc.iotsitewiseAssetModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAssetModel <a name="IotsitewiseAssetModel" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model awscc_iotsitewise_asset_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModel(scope Construct, id *string, config IotsitewiseAssetModelConfig) IotsitewiseAssetModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig">IotsitewiseAssetModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig">IotsitewiseAssetModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelCompositeModels">PutAssetModelCompositeModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelHierarchies">PutAssetModelHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelProperties">PutAssetModelProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putEnforcedAssetModelInterfaceRelationships">PutEnforcedAssetModelInterfaceRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelCompositeModels">ResetAssetModelCompositeModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelDescription">ResetAssetModelDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelExternalId">ResetAssetModelExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelHierarchies">ResetAssetModelHierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelProperties">ResetAssetModelProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelType">ResetAssetModelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetEnforcedAssetModelInterfaceRelationships">ResetEnforcedAssetModelInterfaceRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssetModelCompositeModels` <a name="PutAssetModelCompositeModels" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelCompositeModels"></a>

```go
func PutAssetModelCompositeModels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelCompositeModels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAssetModelHierarchies` <a name="PutAssetModelHierarchies" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelHierarchies"></a>

```go
func PutAssetModelHierarchies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelHierarchies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAssetModelProperties` <a name="PutAssetModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelProperties"></a>

```go
func PutAssetModelProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putAssetModelProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnforcedAssetModelInterfaceRelationships` <a name="PutEnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putEnforcedAssetModelInterfaceRelationships"></a>

```go
func PutEnforcedAssetModelInterfaceRelationships(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putEnforcedAssetModelInterfaceRelationships.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssetModelCompositeModels` <a name="ResetAssetModelCompositeModels" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelCompositeModels"></a>

```go
func ResetAssetModelCompositeModels()
```

##### `ResetAssetModelDescription` <a name="ResetAssetModelDescription" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelDescription"></a>

```go
func ResetAssetModelDescription()
```

##### `ResetAssetModelExternalId` <a name="ResetAssetModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelExternalId"></a>

```go
func ResetAssetModelExternalId()
```

##### `ResetAssetModelHierarchies` <a name="ResetAssetModelHierarchies" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelHierarchies"></a>

```go
func ResetAssetModelHierarchies()
```

##### `ResetAssetModelProperties` <a name="ResetAssetModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelProperties"></a>

```go
func ResetAssetModelProperties()
```

##### `ResetAssetModelType` <a name="ResetAssetModelType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetAssetModelType"></a>

```go
func ResetAssetModelType()
```

##### `ResetEnforcedAssetModelInterfaceRelationships` <a name="ResetEnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetEnforcedAssetModelInterfaceRelationships"></a>

```go
func ResetEnforcedAssetModelInterfaceRelationships()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseAssetModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.IotsitewiseAssetModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.IotsitewiseAssetModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.IotsitewiseAssetModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.IotsitewiseAssetModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotsitewiseAssetModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotsitewiseAssetModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotsitewiseAssetModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAssetModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelArn">AssetModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelCompositeModels">AssetModelCompositeModels</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList">IotsitewiseAssetModelAssetModelCompositeModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelHierarchies">AssetModelHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList">IotsitewiseAssetModelAssetModelHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelId">AssetModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelProperties">AssetModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList">IotsitewiseAssetModelAssetModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships">EnforcedAssetModelInterfaceRelationships</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList">IotsitewiseAssetModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelCompositeModelsInput">AssetModelCompositeModelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelDescriptionInput">AssetModelDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelExternalIdInput">AssetModelExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelHierarchiesInput">AssetModelHierarchiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelNameInput">AssetModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelPropertiesInput">AssetModelPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelTypeInput">AssetModelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationshipsInput">EnforcedAssetModelInterfaceRelationshipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelDescription">AssetModelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelExternalId">AssetModelExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelName">AssetModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelType">AssetModelType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetModelArn`<sup>Required</sup> <a name="AssetModelArn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelArn"></a>

```go
func AssetModelArn() *string
```

- *Type:* *string

---

##### `AssetModelCompositeModels`<sup>Required</sup> <a name="AssetModelCompositeModels" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelCompositeModels"></a>

```go
func AssetModelCompositeModels() IotsitewiseAssetModelAssetModelCompositeModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList">IotsitewiseAssetModelAssetModelCompositeModelsList</a>

---

##### `AssetModelHierarchies`<sup>Required</sup> <a name="AssetModelHierarchies" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelHierarchies"></a>

```go
func AssetModelHierarchies() IotsitewiseAssetModelAssetModelHierarchiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList">IotsitewiseAssetModelAssetModelHierarchiesList</a>

---

##### `AssetModelId`<sup>Required</sup> <a name="AssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelId"></a>

```go
func AssetModelId() *string
```

- *Type:* *string

---

##### `AssetModelProperties`<sup>Required</sup> <a name="AssetModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelProperties"></a>

```go
func AssetModelProperties() IotsitewiseAssetModelAssetModelPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList">IotsitewiseAssetModelAssetModelPropertiesList</a>

---

##### `EnforcedAssetModelInterfaceRelationships`<sup>Required</sup> <a name="EnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships"></a>

```go
func EnforcedAssetModelInterfaceRelationships() IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tags"></a>

```go
func Tags() IotsitewiseAssetModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList">IotsitewiseAssetModelTagsList</a>

---

##### `AssetModelCompositeModelsInput`<sup>Optional</sup> <a name="AssetModelCompositeModelsInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelCompositeModelsInput"></a>

```go
func AssetModelCompositeModelsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetModelDescriptionInput`<sup>Optional</sup> <a name="AssetModelDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelDescriptionInput"></a>

```go
func AssetModelDescriptionInput() *string
```

- *Type:* *string

---

##### `AssetModelExternalIdInput`<sup>Optional</sup> <a name="AssetModelExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelExternalIdInput"></a>

```go
func AssetModelExternalIdInput() *string
```

- *Type:* *string

---

##### `AssetModelHierarchiesInput`<sup>Optional</sup> <a name="AssetModelHierarchiesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelHierarchiesInput"></a>

```go
func AssetModelHierarchiesInput() interface{}
```

- *Type:* interface{}

---

##### `AssetModelNameInput`<sup>Optional</sup> <a name="AssetModelNameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelNameInput"></a>

```go
func AssetModelNameInput() *string
```

- *Type:* *string

---

##### `AssetModelPropertiesInput`<sup>Optional</sup> <a name="AssetModelPropertiesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelPropertiesInput"></a>

```go
func AssetModelPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `AssetModelTypeInput`<sup>Optional</sup> <a name="AssetModelTypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelTypeInput"></a>

```go
func AssetModelTypeInput() *string
```

- *Type:* *string

---

##### `EnforcedAssetModelInterfaceRelationshipsInput`<sup>Optional</sup> <a name="EnforcedAssetModelInterfaceRelationshipsInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationshipsInput"></a>

```go
func EnforcedAssetModelInterfaceRelationshipsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetModelDescription`<sup>Required</sup> <a name="AssetModelDescription" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelDescription"></a>

```go
func AssetModelDescription() *string
```

- *Type:* *string

---

##### `AssetModelExternalId`<sup>Required</sup> <a name="AssetModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelExternalId"></a>

```go
func AssetModelExternalId() *string
```

- *Type:* *string

---

##### `AssetModelName`<sup>Required</sup> <a name="AssetModelName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelName"></a>

```go
func AssetModelName() *string
```

- *Type:* *string

---

##### `AssetModelType`<sup>Required</sup> <a name="AssetModelType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.assetModelType"></a>

```go
func AssetModelType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAssetModelAssetModelCompositeModels <a name="IotsitewiseAssetModelAssetModelCompositeModels" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModels {
	ComposedAssetModelId: *string,
	CompositeModelProperties: interface{},
	Description: *string,
	ExternalId: *string,
	Id: *string,
	Name: *string,
	ParentAssetModelCompositeModelExternalId: *string,
	Path: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.composedAssetModelId">ComposedAssetModelId</a></code> | <code>*string</code> | The component model ID for which the composite model is composed of. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.compositeModelProperties">CompositeModelProperties</a></code> | <code>interface{}</code> | The property definitions of the asset model. You can specify up to 200 properties per asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.description">Description</a></code> | <code>*string</code> | A description for the asset composite model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.externalId">ExternalId</a></code> | <code>*string</code> | The External ID of the composite model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.id">Id</a></code> | <code>*string</code> | The Actual ID of the composite model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.name">Name</a></code> | <code>*string</code> | A unique, friendly name for the asset composite model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.parentAssetModelCompositeModelExternalId">ParentAssetModelCompositeModelExternalId</a></code> | <code>*string</code> | The parent composite model External ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.path">Path</a></code> | <code>*[]*string</code> | The path of the composite model. This is only for derived composite models. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.type">Type</a></code> | <code>*string</code> | The type of the composite model. For alarm composite models, this type is AWS/ALARM. |

---

##### `ComposedAssetModelId`<sup>Optional</sup> <a name="ComposedAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.composedAssetModelId"></a>

```go
ComposedAssetModelId *string
```

- *Type:* *string

The component model ID for which the composite model is composed of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#composed_asset_model_id IotsitewiseAssetModel#composed_asset_model_id}

---

##### `CompositeModelProperties`<sup>Optional</sup> <a name="CompositeModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.compositeModelProperties"></a>

```go
CompositeModelProperties interface{}
```

- *Type:* interface{}

The property definitions of the asset model. You can specify up to 200 properties per asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#composite_model_properties IotsitewiseAssetModel#composite_model_properties}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the asset composite model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#description IotsitewiseAssetModel#description}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The External ID of the composite model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.id"></a>

```go
Id *string
```

- *Type:* *string

The Actual ID of the composite model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique, friendly name for the asset composite model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `ParentAssetModelCompositeModelExternalId`<sup>Optional</sup> <a name="ParentAssetModelCompositeModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.parentAssetModelCompositeModelExternalId"></a>

```go
ParentAssetModelCompositeModelExternalId *string
```

- *Type:* *string

The parent composite model External ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#parent_asset_model_composite_model_external_id IotsitewiseAssetModel#parent_asset_model_composite_model_external_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.path"></a>

```go
Path *[]*string
```

- *Type:* *[]*string

The path of the composite model. This is only for derived composite models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#path IotsitewiseAssetModel#path}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModels.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the composite model. For alarm composite models, this type is AWS/ALARM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties {
	DataType: *string,
	DataTypeSpec: *string,
	ExternalId: *string,
	Id: *string,
	LogicalId: *string,
	Name: *string,
	Type: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.dataType">DataType</a></code> | <code>*string</code> | The data type of the asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.dataTypeSpec">DataTypeSpec</a></code> | <code>*string</code> | The data type of the structure for this property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.externalId">ExternalId</a></code> | <code>*string</code> | The External ID of the Asset Model Property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.id">Id</a></code> | <code>*string</code> | The ID of the Asset Model Property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.logicalId">LogicalId</a></code> | <code>*string</code> | Customer provided Logical ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.name">Name</a></code> | <code>*string</code> | The name of the asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a></code> | The property type. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.unit">Unit</a></code> | <code>*string</code> | The unit of the asset model property, such as Newtons or RPM. |

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The data type of the asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#data_type IotsitewiseAssetModel#data_type}

---

##### `DataTypeSpec`<sup>Optional</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.dataTypeSpec"></a>

```go
DataTypeSpec *string
```

- *Type:* *string

The data type of the structure for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#data_type_spec IotsitewiseAssetModel#data_type_spec}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The External ID of the Asset Model Property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Asset Model Property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalId`<sup>Optional</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.logicalId"></a>

```go
LogicalId *string
```

- *Type:* *string

Customer provided Logical ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.type"></a>

```go
Type IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a>

The property type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of the asset model property, such as Newtons or RPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#unit IotsitewiseAssetModel#unit}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType {
	Attribute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute,
	Metric: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric,
	Transform: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform,
	TypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.attribute"></a>

```go
Attribute IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.metric"></a>

```go
Metric IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}.

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.transform"></a>

```go
Transform IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}.

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute {
	DefaultValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}.

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric {
	Expression: *string,
	Variables: interface{},
	Window: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.expression">Expression</a></code> | <code>*string</code> | The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.variables">Variables</a></code> | <code>interface{}</code> | The list of variables used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a></code> | The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

The list of variables used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.property.window"></a>

```go
Window IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a>

The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#window IotsitewiseAssetModel#window}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables {
	Name: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.property.name">Name</a></code> | <code>*string</code> | The friendly name of the variable to be used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a></code> | The variable that identifies an asset property from which to use values. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

The friendly name of the variable to be used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.property.value"></a>

```go
Value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a>

The variable that identifies an asset property from which to use values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue {
	HierarchyExternalId: *string,
	HierarchyId: *string,
	HierarchyLogicalId: *string,
	PropertyExternalId: *string,
	PropertyId: *string,
	PropertyLogicalId: *string,
	PropertyPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | The External ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | The ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | The External ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyId">PropertyId</a></code> | <code>*string</code> | The ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyPath">PropertyPath</a></code> | <code>interface{}</code> | The path of the property that is trying to be referenced. |

---

##### `HierarchyExternalId`<sup>Optional</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyExternalId"></a>

```go
HierarchyExternalId *string
```

- *Type:* *string

The External ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}

---

##### `HierarchyId`<sup>Optional</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyId"></a>

```go
HierarchyId *string
```

- *Type:* *string

The ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}

---

##### `HierarchyLogicalId`<sup>Optional</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.hierarchyLogicalId"></a>

```go
HierarchyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}.

---

##### `PropertyExternalId`<sup>Optional</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyExternalId"></a>

```go
PropertyExternalId *string
```

- *Type:* *string

The External ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyId"></a>

```go
PropertyId *string
```

- *Type:* *string

The ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}

---

##### `PropertyLogicalId`<sup>Optional</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyLogicalId"></a>

```go
PropertyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}.

---

##### `PropertyPath`<sup>Optional</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.property.propertyPath"></a>

```go
PropertyPath interface{}
```

- *Type:* interface{}

The path of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath.property.name">Name</a></code> | <code>*string</code> | The name of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {
	Tumbling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a></code> | Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. |

---

##### `Tumbling`<sup>Optional</sup> <a name="Tumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow.property.tumbling"></a>

```go
Tumbling IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a>

Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval.

This window is used in metric and aggregation computations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#tumbling IotsitewiseAssetModel#tumbling}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling {
	Interval: *string,
	Offset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.property.interval">Interval</a></code> | <code>*string</code> | The time interval for the tumbling window. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.property.offset">Offset</a></code> | <code>*string</code> | The shift or reference point on timeline for the contiguous time intervals. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

The time interval for the tumbling window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#interval IotsitewiseAssetModel#interval}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

The shift or reference point on timeline for the contiguous time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#offset IotsitewiseAssetModel#offset}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform {
	Expression: *string,
	Variables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.property.expression">Expression</a></code> | <code>*string</code> | The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.property.variables">Variables</a></code> | <code>interface{}</code> | The list of variables used in the expression. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

The list of variables used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables {
	Name: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.property.name">Name</a></code> | <code>*string</code> | The friendly name of the variable to be used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a></code> | The variable that identifies an asset property from which to use values. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

The friendly name of the variable to be used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.property.value"></a>

```go
Value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a>

The variable that identifies an asset property from which to use values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue {
	HierarchyExternalId: *string,
	HierarchyId: *string,
	HierarchyLogicalId: *string,
	PropertyExternalId: *string,
	PropertyId: *string,
	PropertyLogicalId: *string,
	PropertyPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | The External ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | The ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | The External ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyId">PropertyId</a></code> | <code>*string</code> | The ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyPath">PropertyPath</a></code> | <code>interface{}</code> | The path of the property that is trying to be referenced. |

---

##### `HierarchyExternalId`<sup>Optional</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyExternalId"></a>

```go
HierarchyExternalId *string
```

- *Type:* *string

The External ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}

---

##### `HierarchyId`<sup>Optional</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyId"></a>

```go
HierarchyId *string
```

- *Type:* *string

The ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}

---

##### `HierarchyLogicalId`<sup>Optional</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.hierarchyLogicalId"></a>

```go
HierarchyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}.

---

##### `PropertyExternalId`<sup>Optional</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyExternalId"></a>

```go
PropertyExternalId *string
```

- *Type:* *string

The External ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyId"></a>

```go
PropertyId *string
```

- *Type:* *string

The ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}

---

##### `PropertyLogicalId`<sup>Optional</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyLogicalId"></a>

```go
PropertyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}.

---

##### `PropertyPath`<sup>Optional</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.property.propertyPath"></a>

```go
PropertyPath interface{}
```

- *Type:* interface{}

The path of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}

---

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath.property.name">Name</a></code> | <code>*string</code> | The name of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

### IotsitewiseAssetModelAssetModelHierarchies <a name="IotsitewiseAssetModelAssetModelHierarchies" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelHierarchies {
	ChildAssetModelId: *string,
	ExternalId: *string,
	Id: *string,
	LogicalId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.childAssetModelId">ChildAssetModelId</a></code> | <code>*string</code> | The ID of the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.externalId">ExternalId</a></code> | <code>*string</code> | Customer provided external ID for hierarchy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.id">Id</a></code> | <code>*string</code> | Customer provided actual ID for hierarchy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.logicalId">LogicalId</a></code> | <code>*string</code> | Customer provided logical ID for hierarchy. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.name">Name</a></code> | <code>*string</code> | The name of the asset model hierarchy. |

---

##### `ChildAssetModelId`<sup>Optional</sup> <a name="ChildAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.childAssetModelId"></a>

```go
ChildAssetModelId *string
```

- *Type:* *string

The ID of the asset model.

All assets in this hierarchy must be instances of the child AssetModelId asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#child_asset_model_id IotsitewiseAssetModel#child_asset_model_id}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Customer provided external ID for hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.id"></a>

```go
Id *string
```

- *Type:* *string

Customer provided actual ID for hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalId`<sup>Optional</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.logicalId"></a>

```go
LogicalId *string
```

- *Type:* *string

Customer provided logical ID for hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchies.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the asset model hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

### IotsitewiseAssetModelAssetModelProperties <a name="IotsitewiseAssetModelAssetModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelProperties {
	DataType: *string,
	DataTypeSpec: *string,
	ExternalId: *string,
	Id: *string,
	LogicalId: *string,
	Name: *string,
	Type: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.dataType">DataType</a></code> | <code>*string</code> | The data type of the asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.dataTypeSpec">DataTypeSpec</a></code> | <code>*string</code> | The data type of the structure for this property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.externalId">ExternalId</a></code> | <code>*string</code> | The External ID of the Asset Model Property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.id">Id</a></code> | <code>*string</code> | The ID of the Asset Model Property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.logicalId">LogicalId</a></code> | <code>*string</code> | Customer provided Logical ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.name">Name</a></code> | <code>*string</code> | The name of the asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType">IotsitewiseAssetModelAssetModelPropertiesType</a></code> | The property type. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.unit">Unit</a></code> | <code>*string</code> | The unit of the asset model property, such as Newtons or RPM. |

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The data type of the asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#data_type IotsitewiseAssetModel#data_type}

---

##### `DataTypeSpec`<sup>Optional</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.dataTypeSpec"></a>

```go
DataTypeSpec *string
```

- *Type:* *string

The data type of the structure for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#data_type_spec IotsitewiseAssetModel#data_type_spec}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The External ID of the Asset Model Property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#external_id IotsitewiseAssetModel#external_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Asset Model Property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#id IotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalId`<sup>Optional</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.logicalId"></a>

```go
LogicalId *string
```

- *Type:* *string

Customer provided Logical ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#logical_id IotsitewiseAssetModel#logical_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.type"></a>

```go
Type IotsitewiseAssetModelAssetModelPropertiesType
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType">IotsitewiseAssetModelAssetModelPropertiesType</a>

The property type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type IotsitewiseAssetModel#type}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelProperties.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of the asset model property, such as Newtons or RPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#unit IotsitewiseAssetModel#unit}

---

### IotsitewiseAssetModelAssetModelPropertiesType <a name="IotsitewiseAssetModelAssetModelPropertiesType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesType {
	Attribute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute,
	Metric: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric,
	Transform: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform,
	TypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelPropertiesTypeMetric</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelPropertiesTypeTransform</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.attribute"></a>

```go
Attribute IotsitewiseAssetModelAssetModelPropertiesTypeAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#attribute IotsitewiseAssetModel#attribute}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.metric"></a>

```go
Metric IotsitewiseAssetModelAssetModelPropertiesTypeMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelPropertiesTypeMetric</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#metric IotsitewiseAssetModel#metric}.

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.transform"></a>

```go
Transform IotsitewiseAssetModelAssetModelPropertiesTypeTransform
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelPropertiesTypeTransform</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#transform IotsitewiseAssetModel#transform}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#type_name IotsitewiseAssetModel#type_name}.

---

### IotsitewiseAssetModelAssetModelPropertiesTypeAttribute <a name="IotsitewiseAssetModelAssetModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute {
	DefaultValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#default_value IotsitewiseAssetModel#default_value}.

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetric <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric {
	Expression: *string,
	Variables: interface{},
	Window: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.expression">Expression</a></code> | <code>*string</code> | The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.variables">Variables</a></code> | <code>interface{}</code> | The list of variables used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a></code> | The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

The list of variables used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric.property.window"></a>

```go
Window IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a>

The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#window IotsitewiseAssetModel#window}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables {
	Name: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.property.name">Name</a></code> | <code>*string</code> | The friendly name of the variable to be used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a></code> | The variable that identifies an asset property from which to use values. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

The friendly name of the variable to be used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.property.value"></a>

```go
Value IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a>

The variable that identifies an asset property from which to use values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue {
	HierarchyExternalId: *string,
	HierarchyId: *string,
	HierarchyLogicalId: *string,
	PropertyExternalId: *string,
	PropertyId: *string,
	PropertyLogicalId: *string,
	PropertyPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | The External ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | The ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | The External ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyId">PropertyId</a></code> | <code>*string</code> | The ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyPath">PropertyPath</a></code> | <code>interface{}</code> | The path of the property that is trying to be referenced. |

---

##### `HierarchyExternalId`<sup>Optional</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyExternalId"></a>

```go
HierarchyExternalId *string
```

- *Type:* *string

The External ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}

---

##### `HierarchyId`<sup>Optional</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyId"></a>

```go
HierarchyId *string
```

- *Type:* *string

The ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}

---

##### `HierarchyLogicalId`<sup>Optional</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.hierarchyLogicalId"></a>

```go
HierarchyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}.

---

##### `PropertyExternalId`<sup>Optional</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyExternalId"></a>

```go
PropertyExternalId *string
```

- *Type:* *string

The External ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyId"></a>

```go
PropertyId *string
```

- *Type:* *string

The ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}

---

##### `PropertyLogicalId`<sup>Optional</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyLogicalId"></a>

```go
PropertyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}.

---

##### `PropertyPath`<sup>Optional</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.property.propertyPath"></a>

```go
PropertyPath interface{}
```

- *Type:* interface{}

The path of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath.property.name">Name</a></code> | <code>*string</code> | The name of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {
	Tumbling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a></code> | Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. |

---

##### `Tumbling`<sup>Optional</sup> <a name="Tumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow.property.tumbling"></a>

```go
Tumbling IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a>

Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval.

This window is used in metric and aggregation computations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#tumbling IotsitewiseAssetModel#tumbling}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling {
	Interval: *string,
	Offset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.property.interval">Interval</a></code> | <code>*string</code> | The time interval for the tumbling window. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.property.offset">Offset</a></code> | <code>*string</code> | The shift or reference point on timeline for the contiguous time intervals. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

The time interval for the tumbling window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#interval IotsitewiseAssetModel#interval}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.property.offset"></a>

```go
Offset *string
```

- *Type:* *string

The shift or reference point on timeline for the contiguous time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#offset IotsitewiseAssetModel#offset}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeTransform <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform {
	Expression: *string,
	Variables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform.property.expression">Expression</a></code> | <code>*string</code> | The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform.property.variables">Variables</a></code> | <code>interface{}</code> | The list of variables used in the expression. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#expression IotsitewiseAssetModel#expression}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

The list of variables used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#variables IotsitewiseAssetModel#variables}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables {
	Name: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.property.name">Name</a></code> | <code>*string</code> | The friendly name of the variable to be used in the expression. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a></code> | The variable that identifies an asset property from which to use values. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

The friendly name of the variable to be used in the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.property.value"></a>

```go
Value IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a>

The variable that identifies an asset property from which to use values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue {
	HierarchyExternalId: *string,
	HierarchyId: *string,
	HierarchyLogicalId: *string,
	PropertyExternalId: *string,
	PropertyId: *string,
	PropertyLogicalId: *string,
	PropertyPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | The External ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | The ID of the hierarchy that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | The External ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyId">PropertyId</a></code> | <code>*string</code> | The ID of the property that is trying to be referenced. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyPath">PropertyPath</a></code> | <code>interface{}</code> | The path of the property that is trying to be referenced. |

---

##### `HierarchyExternalId`<sup>Optional</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyExternalId"></a>

```go
HierarchyExternalId *string
```

- *Type:* *string

The External ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_external_id IotsitewiseAssetModel#hierarchy_external_id}

---

##### `HierarchyId`<sup>Optional</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyId"></a>

```go
HierarchyId *string
```

- *Type:* *string

The ID of the hierarchy that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_id IotsitewiseAssetModel#hierarchy_id}

---

##### `HierarchyLogicalId`<sup>Optional</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.hierarchyLogicalId"></a>

```go
HierarchyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#hierarchy_logical_id IotsitewiseAssetModel#hierarchy_logical_id}.

---

##### `PropertyExternalId`<sup>Optional</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyExternalId"></a>

```go
PropertyExternalId *string
```

- *Type:* *string

The External ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_external_id IotsitewiseAssetModel#property_external_id}

---

##### `PropertyId`<sup>Optional</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyId"></a>

```go
PropertyId *string
```

- *Type:* *string

The ID of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_id IotsitewiseAssetModel#property_id}

---

##### `PropertyLogicalId`<sup>Optional</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyLogicalId"></a>

```go
PropertyLogicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_logical_id IotsitewiseAssetModel#property_logical_id}.

---

##### `PropertyPath`<sup>Optional</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.property.propertyPath"></a>

```go
PropertyPath interface{}
```

- *Type:* interface{}

The path of the property that is trying to be referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_path IotsitewiseAssetModel#property_path}

---

### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath.property.name">Name</a></code> | <code>*string</code> | The name of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#name IotsitewiseAssetModel#name}

---

### IotsitewiseAssetModelConfig <a name="IotsitewiseAssetModelConfig" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssetModelName: *string,
	AssetModelCompositeModels: interface{},
	AssetModelDescription: *string,
	AssetModelExternalId: *string,
	AssetModelHierarchies: interface{},
	AssetModelProperties: interface{},
	AssetModelType: *string,
	EnforcedAssetModelInterfaceRelationships: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelName">AssetModelName</a></code> | <code>*string</code> | A unique, friendly name for the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelCompositeModels">AssetModelCompositeModels</a></code> | <code>interface{}</code> | The composite asset models that are part of this asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelDescription">AssetModelDescription</a></code> | <code>*string</code> | A description for the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelExternalId">AssetModelExternalId</a></code> | <code>*string</code> | The external ID of the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelHierarchies">AssetModelHierarchies</a></code> | <code>interface{}</code> | The hierarchy definitions of the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelProperties">AssetModelProperties</a></code> | <code>interface{}</code> | The property definitions of the asset model. You can specify up to 200 properties per asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelType">AssetModelType</a></code> | <code>*string</code> | The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL or INTERFACE). |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.enforcedAssetModelInterfaceRelationships">EnforcedAssetModelInterfaceRelationships</a></code> | <code>interface{}</code> | a list of asset model and interface relationships. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the asset model. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetModelName`<sup>Required</sup> <a name="AssetModelName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelName"></a>

```go
AssetModelName *string
```

- *Type:* *string

A unique, friendly name for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_name IotsitewiseAssetModel#asset_model_name}

---

##### `AssetModelCompositeModels`<sup>Optional</sup> <a name="AssetModelCompositeModels" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelCompositeModels"></a>

```go
AssetModelCompositeModels interface{}
```

- *Type:* interface{}

The composite asset models that are part of this asset model.

Composite asset models are asset models that contain specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_composite_models IotsitewiseAssetModel#asset_model_composite_models}

---

##### `AssetModelDescription`<sup>Optional</sup> <a name="AssetModelDescription" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelDescription"></a>

```go
AssetModelDescription *string
```

- *Type:* *string

A description for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_description IotsitewiseAssetModel#asset_model_description}

---

##### `AssetModelExternalId`<sup>Optional</sup> <a name="AssetModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelExternalId"></a>

```go
AssetModelExternalId *string
```

- *Type:* *string

The external ID of the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_external_id IotsitewiseAssetModel#asset_model_external_id}

---

##### `AssetModelHierarchies`<sup>Optional</sup> <a name="AssetModelHierarchies" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelHierarchies"></a>

```go
AssetModelHierarchies interface{}
```

- *Type:* interface{}

The hierarchy definitions of the asset model.

Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_hierarchies IotsitewiseAssetModel#asset_model_hierarchies}

---

##### `AssetModelProperties`<sup>Optional</sup> <a name="AssetModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelProperties"></a>

```go
AssetModelProperties interface{}
```

- *Type:* interface{}

The property definitions of the asset model. You can specify up to 200 properties per asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_properties IotsitewiseAssetModel#asset_model_properties}

---

##### `AssetModelType`<sup>Optional</sup> <a name="AssetModelType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.assetModelType"></a>

```go
AssetModelType *string
```

- *Type:* *string

The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL or INTERFACE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_type IotsitewiseAssetModel#asset_model_type}

---

##### `EnforcedAssetModelInterfaceRelationships`<sup>Optional</sup> <a name="EnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.enforcedAssetModelInterfaceRelationships"></a>

```go
EnforcedAssetModelInterfaceRelationships interface{}
```

- *Type:* interface{}

a list of asset model and interface relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#enforced_asset_model_interface_relationships IotsitewiseAssetModel#enforced_asset_model_interface_relationships}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#tags IotsitewiseAssetModel#tags}

---

### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships {
	InterfaceAssetModelId: *string,
	PropertyMappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.property.interfaceAssetModelId">InterfaceAssetModelId</a></code> | <code>*string</code> | The ID of the interface that is enforced to the asset model. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.property.propertyMappings">PropertyMappings</a></code> | <code>interface{}</code> | Contains information about enforced interface property and asset model property. |

---

##### `InterfaceAssetModelId`<sup>Optional</sup> <a name="InterfaceAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.property.interfaceAssetModelId"></a>

```go
InterfaceAssetModelId *string
```

- *Type:* *string

The ID of the interface that is enforced to the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#interface_asset_model_id IotsitewiseAssetModel#interface_asset_model_id}

---

##### `PropertyMappings`<sup>Optional</sup> <a name="PropertyMappings" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.property.propertyMappings"></a>

```go
PropertyMappings interface{}
```

- *Type:* interface{}

Contains information about enforced interface property and asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#property_mappings IotsitewiseAssetModel#property_mappings}

---

### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings {
	AssetModelPropertyExternalId: *string,
	AssetModelPropertyLogicalId: *string,
	InterfaceAssetModelPropertyExternalId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.assetModelPropertyExternalId">AssetModelPropertyExternalId</a></code> | <code>*string</code> | The external ID of the enforced asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.assetModelPropertyLogicalId">AssetModelPropertyLogicalId</a></code> | <code>*string</code> | The logical ID of the enforced asset model property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.interfaceAssetModelPropertyExternalId">InterfaceAssetModelPropertyExternalId</a></code> | <code>*string</code> | The external ID of the enforced interface property. |

---

##### `AssetModelPropertyExternalId`<sup>Optional</sup> <a name="AssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.assetModelPropertyExternalId"></a>

```go
AssetModelPropertyExternalId *string
```

- *Type:* *string

The external ID of the enforced asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_property_external_id IotsitewiseAssetModel#asset_model_property_external_id}

---

##### `AssetModelPropertyLogicalId`<sup>Optional</sup> <a name="AssetModelPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.assetModelPropertyLogicalId"></a>

```go
AssetModelPropertyLogicalId *string
```

- *Type:* *string

The logical ID of the enforced asset model property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#asset_model_property_logical_id IotsitewiseAssetModel#asset_model_property_logical_id}

---

##### `InterfaceAssetModelPropertyExternalId`<sup>Optional</sup> <a name="InterfaceAssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.property.interfaceAssetModelPropertyExternalId"></a>

```go
InterfaceAssetModelPropertyExternalId *string
```

- *Type:* *string

The external ID of the enforced interface property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#interface_asset_model_property_external_id IotsitewiseAssetModel#interface_asset_model_property_external_id}

---

### IotsitewiseAssetModelTags <a name="IotsitewiseAssetModelTags" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

&iotsitewiseassetmodel.IotsitewiseAssetModelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#key IotsitewiseAssetModel#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#key IotsitewiseAssetModel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsitewise_asset_model#value IotsitewiseAssetModel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.putType">PutType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetDataTypeSpec">ResetDataTypeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetLogicalId">ResetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutType` <a name="PutType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.putType"></a>

```go
func PutType(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a>

---

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDataTypeSpec` <a name="ResetDataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetDataTypeSpec"></a>

```go
func ResetDataTypeSpec()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLogicalId` <a name="ResetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetLogicalId"></a>

```go
func ResetLogicalId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpecInput">DataTypeSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalIdInput">LogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.typeInput">TypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec">DataTypeSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type"></a>

```go
func Type() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a>

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DataTypeSpecInput`<sup>Optional</sup> <a name="DataTypeSpecInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpecInput"></a>

```go
func DataTypeSpecInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogicalIdInput`<sup>Optional</sup> <a name="LogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalIdInput"></a>

```go
func LogicalIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.typeInput"></a>

```go
func TypeInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DataTypeSpec`<sup>Required</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec"></a>

```go
func DataTypeSpec() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId"></a>

```go
func LogicalId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindow` <a name="PutWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putWindow"></a>

```go
func PutWindow(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a>

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetVariables"></a>

```go
func ResetVariables()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resetWindow"></a>

```go
func ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.windowInput">WindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables"></a>

```go
func Variables() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window"></a>

```go
func Window() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.windowInput"></a>

```go
func WindowInput() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.putValue"></a>

```go
func PutValue(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```go
func Value() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath">PutPropertyPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyExternalId">ResetHierarchyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyId">ResetHierarchyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyLogicalId">ResetHierarchyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyExternalId">ResetPropertyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyLogicalId">ResetPropertyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyPath">ResetPropertyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyPath` <a name="PutPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath"></a>

```go
func PutPropertyPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHierarchyExternalId` <a name="ResetHierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyExternalId"></a>

```go
func ResetHierarchyExternalId()
```

##### `ResetHierarchyId` <a name="ResetHierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyId"></a>

```go
func ResetHierarchyId()
```

##### `ResetHierarchyLogicalId` <a name="ResetHierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyLogicalId"></a>

```go
func ResetHierarchyLogicalId()
```

##### `ResetPropertyExternalId` <a name="ResetPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyExternalId"></a>

```go
func ResetPropertyExternalId()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyId"></a>

```go
func ResetPropertyId()
```

##### `ResetPropertyLogicalId` <a name="ResetPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyLogicalId"></a>

```go
func ResetPropertyLogicalId()
```

##### `ResetPropertyPath` <a name="ResetPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyPath"></a>

```go
func ResetPropertyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalIdInput">HierarchyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyIdInput">HierarchyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalIdInput">HierarchyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalIdInput">PropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalIdInput">PropertyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```go
func PropertyPath() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `HierarchyExternalIdInput`<sup>Optional</sup> <a name="HierarchyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalIdInput"></a>

```go
func HierarchyExternalIdInput() *string
```

- *Type:* *string

---

##### `HierarchyIdInput`<sup>Optional</sup> <a name="HierarchyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyIdInput"></a>

```go
func HierarchyIdInput() *string
```

- *Type:* *string

---

##### `HierarchyLogicalIdInput`<sup>Optional</sup> <a name="HierarchyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalIdInput"></a>

```go
func HierarchyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyExternalIdInput`<sup>Optional</sup> <a name="PropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalIdInput"></a>

```go
func PropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyIdInput"></a>

```go
func PropertyIdInput() *string
```

- *Type:* *string

---

##### `PropertyLogicalIdInput`<sup>Optional</sup> <a name="PropertyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalIdInput"></a>

```go
func PropertyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPathInput"></a>

```go
func PropertyPathInput() interface{}
```

- *Type:* interface{}

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```go
func HierarchyExternalId() *string
```

- *Type:* *string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```go
func HierarchyId() *string
```

- *Type:* *string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```go
func HierarchyLogicalId() *string
```

- *Type:* *string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```go
func PropertyExternalId() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```go
func PropertyLogicalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.putTumbling">PutTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resetTumbling">ResetTumbling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTumbling` <a name="PutTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.putTumbling"></a>

```go
func PutTumbling(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a>

---

##### `ResetTumbling` <a name="ResetTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resetTumbling"></a>

```go
func ResetTumbling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumblingInput">TumblingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```go
func Tumbling() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `TumblingInput`<sup>Optional</sup> <a name="TumblingInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumblingInput"></a>

```go
func TumblingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putTransform">PutTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttribute` <a name="PutAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putAttribute"></a>

```go
func PutAttribute(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putMetric"></a>

```go
func PutMetric(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a>

---

##### `PutTransform` <a name="PutTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putTransform"></a>

```go
func PutTransform(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.putTransform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetTransform"></a>

```go
func ResetTransform()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transformInput">TransformInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute"></a>

```go
func Attribute() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric"></a>

```go
func Metric() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a>

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform"></a>

```go
func Transform() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transformInput"></a>

```go
func TransformInput() interface{}
```

- *Type:* interface{}

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resetVariables"></a>

```go
func ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables"></a>

```go
func Variables() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.putValue"></a>

```go
func PutValue(value IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```go
func Value() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath">PutPropertyPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyExternalId">ResetHierarchyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyId">ResetHierarchyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyLogicalId">ResetHierarchyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyExternalId">ResetPropertyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyLogicalId">ResetPropertyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyPath">ResetPropertyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyPath` <a name="PutPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath"></a>

```go
func PutPropertyPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHierarchyExternalId` <a name="ResetHierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyExternalId"></a>

```go
func ResetHierarchyExternalId()
```

##### `ResetHierarchyId` <a name="ResetHierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyId"></a>

```go
func ResetHierarchyId()
```

##### `ResetHierarchyLogicalId` <a name="ResetHierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyLogicalId"></a>

```go
func ResetHierarchyLogicalId()
```

##### `ResetPropertyExternalId` <a name="ResetPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyExternalId"></a>

```go
func ResetPropertyExternalId()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyId"></a>

```go
func ResetPropertyId()
```

##### `ResetPropertyLogicalId` <a name="ResetPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyLogicalId"></a>

```go
func ResetPropertyLogicalId()
```

##### `ResetPropertyPath` <a name="ResetPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyPath"></a>

```go
func ResetPropertyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalIdInput">HierarchyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyIdInput">HierarchyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalIdInput">HierarchyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalIdInput">PropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalIdInput">PropertyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```go
func PropertyPath() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `HierarchyExternalIdInput`<sup>Optional</sup> <a name="HierarchyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalIdInput"></a>

```go
func HierarchyExternalIdInput() *string
```

- *Type:* *string

---

##### `HierarchyIdInput`<sup>Optional</sup> <a name="HierarchyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyIdInput"></a>

```go
func HierarchyIdInput() *string
```

- *Type:* *string

---

##### `HierarchyLogicalIdInput`<sup>Optional</sup> <a name="HierarchyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalIdInput"></a>

```go
func HierarchyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyExternalIdInput`<sup>Optional</sup> <a name="PropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalIdInput"></a>

```go
func PropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyIdInput"></a>

```go
func PropertyIdInput() *string
```

- *Type:* *string

---

##### `PropertyLogicalIdInput`<sup>Optional</sup> <a name="PropertyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalIdInput"></a>

```go
func PropertyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPathInput"></a>

```go
func PropertyPathInput() interface{}
```

- *Type:* interface{}

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```go
func HierarchyExternalId() *string
```

- *Type:* *string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```go
func HierarchyId() *string
```

- *Type:* *string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```go
func HierarchyLogicalId() *string
```

- *Type:* *string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```go
func PropertyExternalId() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```go
func PropertyLogicalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsList <a name="IotsitewiseAssetModelAssetModelCompositeModelsList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelCompositeModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelCompositeModelsOutputReference <a name="IotsitewiseAssetModelAssetModelCompositeModelsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelCompositeModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelCompositeModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.putCompositeModelProperties">PutCompositeModelProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetComposedAssetModelId">ResetComposedAssetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetCompositeModelProperties">ResetCompositeModelProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetParentAssetModelCompositeModelExternalId">ResetParentAssetModelCompositeModelExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeModelProperties` <a name="PutCompositeModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.putCompositeModelProperties"></a>

```go
func PutCompositeModelProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.putCompositeModelProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComposedAssetModelId` <a name="ResetComposedAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetComposedAssetModelId"></a>

```go
func ResetComposedAssetModelId()
```

##### `ResetCompositeModelProperties` <a name="ResetCompositeModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetCompositeModelProperties"></a>

```go
func ResetCompositeModelProperties()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParentAssetModelCompositeModelExternalId` <a name="ResetParentAssetModelCompositeModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetParentAssetModelCompositeModelExternalId"></a>

```go
func ResetParentAssetModelCompositeModelExternalId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties">CompositeModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelIdInput">ComposedAssetModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelPropertiesInput">CompositeModelPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalIdInput">ParentAssetModelCompositeModelExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.pathInput">PathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId">ComposedAssetModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId">ParentAssetModelCompositeModelExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path">Path</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompositeModelProperties`<sup>Required</sup> <a name="CompositeModelProperties" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties"></a>

```go
func CompositeModelProperties() IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">IotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a>

---

##### `ComposedAssetModelIdInput`<sup>Optional</sup> <a name="ComposedAssetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelIdInput"></a>

```go
func ComposedAssetModelIdInput() *string
```

- *Type:* *string

---

##### `CompositeModelPropertiesInput`<sup>Optional</sup> <a name="CompositeModelPropertiesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelPropertiesInput"></a>

```go
func CompositeModelPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentAssetModelCompositeModelExternalIdInput`<sup>Optional</sup> <a name="ParentAssetModelCompositeModelExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalIdInput"></a>

```go
func ParentAssetModelCompositeModelExternalIdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.pathInput"></a>

```go
func PathInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ComposedAssetModelId`<sup>Required</sup> <a name="ComposedAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId"></a>

```go
func ComposedAssetModelId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentAssetModelCompositeModelExternalId`<sup>Required</sup> <a name="ParentAssetModelCompositeModelExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId"></a>

```go
func ParentAssetModelCompositeModelExternalId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path"></a>

```go
func Path() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelHierarchiesList <a name="IotsitewiseAssetModelAssetModelHierarchiesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelHierarchiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelHierarchiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelHierarchiesOutputReference <a name="IotsitewiseAssetModelAssetModelHierarchiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelHierarchiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelHierarchiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetChildAssetModelId">ResetChildAssetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetLogicalId">ResetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChildAssetModelId` <a name="ResetChildAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetChildAssetModelId"></a>

```go
func ResetChildAssetModelId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLogicalId` <a name="ResetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetLogicalId"></a>

```go
func ResetLogicalId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelIdInput">ChildAssetModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalIdInput">LogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId">ChildAssetModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId">LogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildAssetModelIdInput`<sup>Optional</sup> <a name="ChildAssetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelIdInput"></a>

```go
func ChildAssetModelIdInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogicalIdInput`<sup>Optional</sup> <a name="LogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalIdInput"></a>

```go
func LogicalIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ChildAssetModelId`<sup>Required</sup> <a name="ChildAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId"></a>

```go
func ChildAssetModelId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId"></a>

```go
func LogicalId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesList <a name="IotsitewiseAssetModelAssetModelPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.putType">PutType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetDataTypeSpec">ResetDataTypeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetLogicalId">ResetLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutType` <a name="PutType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.putType"></a>

```go
func PutType(value IotsitewiseAssetModelAssetModelPropertiesType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesType">IotsitewiseAssetModelAssetModelPropertiesType</a>

---

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDataTypeSpec` <a name="ResetDataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetDataTypeSpec"></a>

```go
func ResetDataTypeSpec()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLogicalId` <a name="ResetLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetLogicalId"></a>

```go
func ResetLogicalId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpecInput">DataTypeSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalIdInput">LogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.typeInput">TypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec">DataTypeSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type"></a>

```go
func Type() IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a>

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DataTypeSpecInput`<sup>Optional</sup> <a name="DataTypeSpecInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpecInput"></a>

```go
func DataTypeSpecInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogicalIdInput`<sup>Optional</sup> <a name="LogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalIdInput"></a>

```go
func LogicalIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.typeInput"></a>

```go
func TypeInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DataTypeSpec`<sup>Required</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec"></a>

```go
func DataTypeSpec() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId"></a>

```go
func LogicalId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindow` <a name="PutWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putWindow"></a>

```go
func PutWindow(value IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a>

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetVariables"></a>

```go
func ResetVariables()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resetWindow"></a>

```go
func ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.windowInput">WindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables"></a>

```go
func Variables() IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window"></a>

```go
func Window() IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.windowInput"></a>

```go
func WindowInput() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.putValue"></a>

```go
func PutValue(value IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```go
func Value() IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath">PutPropertyPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyExternalId">ResetHierarchyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyId">ResetHierarchyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyLogicalId">ResetHierarchyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyExternalId">ResetPropertyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyLogicalId">ResetPropertyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyPath">ResetPropertyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyPath` <a name="PutPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath"></a>

```go
func PutPropertyPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.putPropertyPath.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHierarchyExternalId` <a name="ResetHierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyExternalId"></a>

```go
func ResetHierarchyExternalId()
```

##### `ResetHierarchyId` <a name="ResetHierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyId"></a>

```go
func ResetHierarchyId()
```

##### `ResetHierarchyLogicalId` <a name="ResetHierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetHierarchyLogicalId"></a>

```go
func ResetHierarchyLogicalId()
```

##### `ResetPropertyExternalId` <a name="ResetPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyExternalId"></a>

```go
func ResetPropertyExternalId()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyId"></a>

```go
func ResetPropertyId()
```

##### `ResetPropertyLogicalId` <a name="ResetPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyLogicalId"></a>

```go
func ResetPropertyLogicalId()
```

##### `ResetPropertyPath` <a name="ResetPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resetPropertyPath"></a>

```go
func ResetPropertyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalIdInput">HierarchyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyIdInput">HierarchyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalIdInput">HierarchyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalIdInput">PropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalIdInput">PropertyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```go
func PropertyPath() IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `HierarchyExternalIdInput`<sup>Optional</sup> <a name="HierarchyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalIdInput"></a>

```go
func HierarchyExternalIdInput() *string
```

- *Type:* *string

---

##### `HierarchyIdInput`<sup>Optional</sup> <a name="HierarchyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyIdInput"></a>

```go
func HierarchyIdInput() *string
```

- *Type:* *string

---

##### `HierarchyLogicalIdInput`<sup>Optional</sup> <a name="HierarchyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalIdInput"></a>

```go
func HierarchyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyExternalIdInput`<sup>Optional</sup> <a name="PropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalIdInput"></a>

```go
func PropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyIdInput"></a>

```go
func PropertyIdInput() *string
```

- *Type:* *string

---

##### `PropertyLogicalIdInput`<sup>Optional</sup> <a name="PropertyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalIdInput"></a>

```go
func PropertyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPathInput"></a>

```go
func PropertyPathInput() interface{}
```

- *Type:* interface{}

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```go
func HierarchyExternalId() *string
```

- *Type:* *string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```go
func HierarchyId() *string
```

- *Type:* *string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```go
func HierarchyLogicalId() *string
```

- *Type:* *string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```go
func PropertyExternalId() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```go
func PropertyLogicalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.putTumbling">PutTumbling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resetTumbling">ResetTumbling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTumbling` <a name="PutTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.putTumbling"></a>

```go
func PutTumbling(value IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a>

---

##### `ResetTumbling` <a name="ResetTumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resetTumbling"></a>

```go
func ResetTumbling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumblingInput">TumblingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```go
func Tumbling() IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `TumblingInput`<sup>Optional</sup> <a name="TumblingInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumblingInput"></a>

```go
func TumblingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">Offset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```go
func Offset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putTransform">PutTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttribute` <a name="PutAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putAttribute"></a>

```go
func PutAttribute(value IotsitewiseAssetModelAssetModelPropertiesTypeAttribute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttribute">IotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putMetric"></a>

```go
func PutMetric(value IotsitewiseAssetModelAssetModelPropertiesTypeMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetric">IotsitewiseAssetModelAssetModelPropertiesTypeMetric</a>

---

##### `PutTransform` <a name="PutTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putTransform"></a>

```go
func PutTransform(value IotsitewiseAssetModelAssetModelPropertiesTypeTransform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.putTransform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransform">IotsitewiseAssetModelAssetModelPropertiesTypeTransform</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetTransform"></a>

```go
func ResetTransform()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resetTypeName"></a>

```go
func ResetTypeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transformInput">TransformInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute"></a>

```go
func Attribute() IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric"></a>

```go
func Metric() IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a>

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform"></a>

```go
func Transform() IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transformInput"></a>

```go
func TransformInput() interface{}
```

- *Type:* interface{}

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resetVariables"></a>

```go
func ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables"></a>

```go
func Variables() IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.putValue"></a>

```go
func PutValue(value IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```go
func Value() IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath">PutPropertyPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyExternalId">ResetHierarchyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyId">ResetHierarchyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyLogicalId">ResetHierarchyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyExternalId">ResetPropertyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyId">ResetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyLogicalId">ResetPropertyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyPath">ResetPropertyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyPath` <a name="PutPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath"></a>

```go
func PutPropertyPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.putPropertyPath.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHierarchyExternalId` <a name="ResetHierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyExternalId"></a>

```go
func ResetHierarchyExternalId()
```

##### `ResetHierarchyId` <a name="ResetHierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyId"></a>

```go
func ResetHierarchyId()
```

##### `ResetHierarchyLogicalId` <a name="ResetHierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetHierarchyLogicalId"></a>

```go
func ResetHierarchyLogicalId()
```

##### `ResetPropertyExternalId` <a name="ResetPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyExternalId"></a>

```go
func ResetPropertyExternalId()
```

##### `ResetPropertyId` <a name="ResetPropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyId"></a>

```go
func ResetPropertyId()
```

##### `ResetPropertyLogicalId` <a name="ResetPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyLogicalId"></a>

```go
func ResetPropertyLogicalId()
```

##### `ResetPropertyPath` <a name="ResetPropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resetPropertyPath"></a>

```go
func ResetPropertyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalIdInput">HierarchyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyIdInput">HierarchyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalIdInput">HierarchyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalIdInput">PropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyIdInput">PropertyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalIdInput">PropertyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```go
func PropertyPath() IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `HierarchyExternalIdInput`<sup>Optional</sup> <a name="HierarchyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalIdInput"></a>

```go
func HierarchyExternalIdInput() *string
```

- *Type:* *string

---

##### `HierarchyIdInput`<sup>Optional</sup> <a name="HierarchyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyIdInput"></a>

```go
func HierarchyIdInput() *string
```

- *Type:* *string

---

##### `HierarchyLogicalIdInput`<sup>Optional</sup> <a name="HierarchyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalIdInput"></a>

```go
func HierarchyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyExternalIdInput`<sup>Optional</sup> <a name="PropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalIdInput"></a>

```go
func PropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyIdInput"></a>

```go
func PropertyIdInput() *string
```

- *Type:* *string

---

##### `PropertyLogicalIdInput`<sup>Optional</sup> <a name="PropertyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalIdInput"></a>

```go
func PropertyLogicalIdInput() *string
```

- *Type:* *string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPathInput"></a>

```go
func PropertyPathInput() interface{}
```

- *Type:* interface{}

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```go
func HierarchyExternalId() *string
```

- *Type:* *string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```go
func HierarchyId() *string
```

- *Type:* *string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```go
func HierarchyLogicalId() *string
```

- *Type:* *string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```go
func PropertyExternalId() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```go
func PropertyLogicalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.putPropertyMappings">PutPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resetInterfaceAssetModelId">ResetInterfaceAssetModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resetPropertyMappings">ResetPropertyMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyMappings` <a name="PutPropertyMappings" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.putPropertyMappings"></a>

```go
func PutPropertyMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.putPropertyMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInterfaceAssetModelId` <a name="ResetInterfaceAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resetInterfaceAssetModelId"></a>

```go
func ResetInterfaceAssetModelId()
```

##### `ResetPropertyMappings` <a name="ResetPropertyMappings" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resetPropertyMappings"></a>

```go
func ResetPropertyMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings">PropertyMappings</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelIdInput">InterfaceAssetModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappingsInput">PropertyMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId">InterfaceAssetModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyMappings`<sup>Required</sup> <a name="PropertyMappings" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings"></a>

```go
func PropertyMappings() IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a>

---

##### `InterfaceAssetModelIdInput`<sup>Optional</sup> <a name="InterfaceAssetModelIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelIdInput"></a>

```go
func InterfaceAssetModelIdInput() *string
```

- *Type:* *string

---

##### `PropertyMappingsInput`<sup>Optional</sup> <a name="PropertyMappingsInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappingsInput"></a>

```go
func PropertyMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `InterfaceAssetModelId`<sup>Required</sup> <a name="InterfaceAssetModelId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId"></a>

```go
func InterfaceAssetModelId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference <a name="IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetAssetModelPropertyExternalId">ResetAssetModelPropertyExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetAssetModelPropertyLogicalId">ResetAssetModelPropertyLogicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetInterfaceAssetModelPropertyExternalId">ResetInterfaceAssetModelPropertyExternalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssetModelPropertyExternalId` <a name="ResetAssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetAssetModelPropertyExternalId"></a>

```go
func ResetAssetModelPropertyExternalId()
```

##### `ResetAssetModelPropertyLogicalId` <a name="ResetAssetModelPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetAssetModelPropertyLogicalId"></a>

```go
func ResetAssetModelPropertyLogicalId()
```

##### `ResetInterfaceAssetModelPropertyExternalId` <a name="ResetInterfaceAssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resetInterfaceAssetModelPropertyExternalId"></a>

```go
func ResetInterfaceAssetModelPropertyExternalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalIdInput">AssetModelPropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalIdInput">AssetModelPropertyLogicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalIdInput">InterfaceAssetModelPropertyExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId">AssetModelPropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId">AssetModelPropertyLogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId">InterfaceAssetModelPropertyExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetModelPropertyExternalIdInput`<sup>Optional</sup> <a name="AssetModelPropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalIdInput"></a>

```go
func AssetModelPropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `AssetModelPropertyLogicalIdInput`<sup>Optional</sup> <a name="AssetModelPropertyLogicalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalIdInput"></a>

```go
func AssetModelPropertyLogicalIdInput() *string
```

- *Type:* *string

---

##### `InterfaceAssetModelPropertyExternalIdInput`<sup>Optional</sup> <a name="InterfaceAssetModelPropertyExternalIdInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalIdInput"></a>

```go
func InterfaceAssetModelPropertyExternalIdInput() *string
```

- *Type:* *string

---

##### `AssetModelPropertyExternalId`<sup>Required</sup> <a name="AssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId"></a>

```go
func AssetModelPropertyExternalId() *string
```

- *Type:* *string

---

##### `AssetModelPropertyLogicalId`<sup>Required</sup> <a name="AssetModelPropertyLogicalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId"></a>

```go
func AssetModelPropertyLogicalId() *string
```

- *Type:* *string

---

##### `InterfaceAssetModelPropertyExternalId`<sup>Required</sup> <a name="InterfaceAssetModelPropertyExternalId" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId"></a>

```go
func InterfaceAssetModelPropertyExternalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelTagsList <a name="IotsitewiseAssetModelTagsList" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseAssetModelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.get"></a>

```go
func Get(index *f64) IotsitewiseAssetModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseAssetModelTagsOutputReference <a name="IotsitewiseAssetModelTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseassetmodel"

iotsitewiseassetmodel.NewIotsitewiseAssetModelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseAssetModelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseAssetModel.IotsitewiseAssetModelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



