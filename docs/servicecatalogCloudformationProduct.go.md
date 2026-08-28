# `servicecatalogCloudformationProduct` Submodule <a name="`servicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProduct <a name="ServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProduct(scope Construct, id *string, config ServicecatalogCloudformationProductConfig) ServicecatalogCloudformationProduct
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig">ServicecatalogCloudformationProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig">ServicecatalogCloudformationProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters">PutProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection">PutSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor">ResetDistributor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType">ResetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters">ResetProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts">ResetReplaceProvisioningArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection">ResetSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription">ResetSupportDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail">ResetSupportEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisioningArtifactParameters` <a name="PutProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters"></a>

```go
func PutProvisioningArtifactParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceConnection` <a name="PutSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection"></a>

```go
func PutSourceConnection(value ServicecatalogCloudformationProductSourceConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDistributor` <a name="ResetDistributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor"></a>

```go
func ResetDistributor()
```

##### `ResetProductType` <a name="ResetProductType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType"></a>

```go
func ResetProductType()
```

##### `ResetProvisioningArtifactParameters` <a name="ResetProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters"></a>

```go
func ResetProvisioningArtifactParameters()
```

##### `ResetReplaceProvisioningArtifacts` <a name="ResetReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts"></a>

```go
func ResetReplaceProvisioningArtifacts()
```

##### `ResetSourceConnection` <a name="ResetSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection"></a>

```go
func ResetSourceConnection()
```

##### `ResetSupportDescription` <a name="ResetSupportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription"></a>

```go
func ResetSupportDescription()
```

##### `ResetSupportEmail` <a name="ResetSupportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail"></a>

```go
func ResetSupportEmail()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.ServicecatalogCloudformationProduct_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.ServicecatalogCloudformationProduct_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.ServicecatalogCloudformationProduct_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.ServicecatalogCloudformationProduct_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogCloudformationProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId">CloudformationProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds">ProvisioningArtifactIds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames">ProvisioningArtifactNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters">ProvisioningArtifactParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection">SourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput">DistributorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput">ProductTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput">ProvisioningArtifactParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput">ReplaceProvisioningArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput">SourceConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput">SupportDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput">SupportEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor">Distributor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType">ProductType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">ReplaceProvisioningArtifacts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription">SupportDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail">SupportEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudformationProductId`<sup>Required</sup> <a name="CloudformationProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```go
func CloudformationProductId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactIds`<sup>Required</sup> <a name="ProvisioningArtifactIds" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```go
func ProvisioningArtifactIds() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactNames`<sup>Required</sup> <a name="ProvisioningArtifactNames" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```go
func ProvisioningArtifactNames() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactParameters`<sup>Required</sup> <a name="ProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```go
func ProvisioningArtifactParameters() ServicecatalogCloudformationProductProvisioningArtifactParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `SourceConnection`<sup>Required</sup> <a name="SourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection"></a>

```go
func SourceConnection() ServicecatalogCloudformationProductSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags"></a>

```go
func Tags() ServicecatalogCloudformationProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DistributorInput`<sup>Optional</sup> <a name="DistributorInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput"></a>

```go
func DistributorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ProductTypeInput`<sup>Optional</sup> <a name="ProductTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput"></a>

```go
func ProductTypeInput() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactParametersInput`<sup>Optional</sup> <a name="ProvisioningArtifactParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput"></a>

```go
func ProvisioningArtifactParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceProvisioningArtifactsInput`<sup>Optional</sup> <a name="ReplaceProvisioningArtifactsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput"></a>

```go
func ReplaceProvisioningArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceConnectionInput`<sup>Optional</sup> <a name="SourceConnectionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput"></a>

```go
func SourceConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `SupportDescriptionInput`<sup>Optional</sup> <a name="SupportDescriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput"></a>

```go
func SupportDescriptionInput() *string
```

- *Type:* *string

---

##### `SupportEmailInput`<sup>Optional</sup> <a name="SupportEmailInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput"></a>

```go
func SupportEmailInput() *string
```

- *Type:* *string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Distributor`<sup>Required</sup> <a name="Distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor"></a>

```go
func Distributor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType"></a>

```go
func ProductType() *string
```

- *Type:* *string

---

##### `ReplaceProvisioningArtifacts`<sup>Required</sup> <a name="ReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```go
func ReplaceProvisioningArtifacts() interface{}
```

- *Type:* interface{}

---

##### `SupportDescription`<sup>Required</sup> <a name="SupportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription"></a>

```go
func SupportDescription() *string
```

- *Type:* *string

---

##### `SupportEmail`<sup>Required</sup> <a name="SupportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail"></a>

```go
func SupportEmail() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProductConfig <a name="ServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Owner: *string,
	AcceptLanguage: *string,
	Description: *string,
	Distributor: *string,
	ProductType: *string,
	ProvisioningArtifactParameters: interface{},
	ReplaceProvisioningArtifacts: interface{},
	SourceConnection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection,
	SupportDescription: *string,
	SupportEmail: *string,
	SupportUrl: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name">Name</a></code> | <code>*string</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner">Owner</a></code> | <code>*string</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description">Description</a></code> | <code>*string</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor">Distributor</a></code> | <code>*string</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType">ProductType</a></code> | <code>*string</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters">ProvisioningArtifactParameters</a></code> | <code>interface{}</code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts">ReplaceProvisioningArtifacts</a></code> | <code>interface{}</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection">SourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription">SupportDescription</a></code> | <code>*string</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail">SupportEmail</a></code> | <code>*string</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `Distributor`<sup>Optional</sup> <a name="Distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor"></a>

```go
Distributor *string
```

- *Type:* *string

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `ProductType`<sup>Optional</sup> <a name="ProductType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType"></a>

```go
ProductType *string
```

- *Type:* *string

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `ProvisioningArtifactParameters`<sup>Optional</sup> <a name="ProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters"></a>

```go
ProvisioningArtifactParameters interface{}
```

- *Type:* interface{}

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `ReplaceProvisioningArtifacts`<sup>Optional</sup> <a name="ReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts"></a>

```go
ReplaceProvisioningArtifacts interface{}
```

- *Type:* interface{}

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `SourceConnection`<sup>Optional</sup> <a name="SourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection"></a>

```go
SourceConnection ServicecatalogCloudformationProductSourceConnection
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `SupportDescription`<sup>Optional</sup> <a name="SupportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription"></a>

```go
SupportDescription *string
```

- *Type:* *string

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `SupportEmail`<sup>Optional</sup> <a name="SupportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail"></a>

```go
SupportEmail *string
```

- *Type:* *string

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

### ServicecatalogCloudformationProductProvisioningArtifactParameters <a name="ServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductProvisioningArtifactParameters {
	Description: *string,
	DisableTemplateValidation: interface{},
	Info: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description">Description</a></code> | <code>*string</code> | The description of the provisioning artifact, including how it differs from the previous provisioning artifact. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation">DisableTemplateValidation</a></code> | <code>interface{}</code> | If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | Specify the template source with one of the following options, but not both. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name">Name</a></code> | <code>*string</code> | The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type">Type</a></code> | <code>*string</code> | The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the provisioning artifact, including how it differs from the previous provisioning artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `DisableTemplateValidation`<sup>Optional</sup> <a name="DisableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```go
DisableTemplateValidation interface{}
```

- *Type:* interface{}

If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation ServicecatalogCloudformationProduct#disable_template_validation}

---

##### `Info`<sup>Optional</sup> <a name="Info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info"></a>

```go
Info ServicecatalogCloudformationProductProvisioningArtifactParametersInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

Specify the template source with one of the following options, but not both.

Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:

"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."

ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#info ServicecatalogCloudformationProduct#info}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo {
	ImportFromPhysicalId: *string,
	LoadTemplateFromUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId">ImportFromPhysicalId</a></code> | <code>*string</code> | The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl">LoadTemplateFromUrl</a></code> | <code>*string</code> | The URL of the AWS CloudFormation template in Amazon S3 in JSON format. |

---

##### `ImportFromPhysicalId`<sup>Optional</sup> <a name="ImportFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId"></a>

```go
ImportFromPhysicalId *string
```

- *Type:* *string

The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id ServicecatalogCloudformationProduct#import_from_physical_id}

---

##### `LoadTemplateFromUrl`<sup>Optional</sup> <a name="LoadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl"></a>

```go
LoadTemplateFromUrl *string
```

- *Type:* *string

The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url ServicecatalogCloudformationProduct#load_template_from_url}

---

### ServicecatalogCloudformationProductSourceConnection <a name="ServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductSourceConnection {
	ConnectionParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters">ConnectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | The connection details based on the connection Type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type">Type</a></code> | <code>*string</code> | The only supported SourceConnection type is Codestar. |

---

##### `ConnectionParameters`<sup>Optional</sup> <a name="ConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters"></a>

```go
ConnectionParameters ServicecatalogCloudformationProductSourceConnectionConnectionParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

The connection details based on the connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type"></a>

```go
Type *string
```

- *Type:* *string

The only supported SourceConnection type is Codestar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters {
	CodeStar: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar">CodeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}. |

---

##### `CodeStar`<sup>Optional</sup> <a name="CodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar"></a>

```go
CodeStar ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}.

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar {
	ArtifactPath: *string,
	Branch: *string,
	ConnectionArn: *string,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch">Branch</a></code> | <code>*string</code> | The specific branch where the artifact resides. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository">Repository</a></code> | <code>*string</code> | The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.". |

---

##### `ArtifactPath`<sup>Optional</sup> <a name="ArtifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath"></a>

```go
ArtifactPath *string
```

- *Type:* *string

The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The specific branch where the artifact resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}

---

##### `ConnectionArn`<sup>Optional</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn"></a>

```go
ConnectionArn *string
```

- *Type:* *string

The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}

---

### ServicecatalogCloudformationProductTags <a name="ServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

&servicecatalogcloudformationproduct.ServicecatalogCloudformationProductTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#key ServicecatalogCloudformationProduct#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_product#value ServicecatalogCloudformationProduct#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId">ResetImportFromPhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl">ResetLoadTemplateFromUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImportFromPhysicalId` <a name="ResetImportFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId"></a>

```go
func ResetImportFromPhysicalId()
```

##### `ResetLoadTemplateFromUrl` <a name="ResetLoadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl"></a>

```go
func ResetLoadTemplateFromUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput">ImportFromPhysicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput">LoadTemplateFromUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">ImportFromPhysicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">LoadTemplateFromUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImportFromPhysicalIdInput`<sup>Optional</sup> <a name="ImportFromPhysicalIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput"></a>

```go
func ImportFromPhysicalIdInput() *string
```

- *Type:* *string

---

##### `LoadTemplateFromUrlInput`<sup>Optional</sup> <a name="LoadTemplateFromUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput"></a>

```go
func LoadTemplateFromUrlInput() *string
```

- *Type:* *string

---

##### `ImportFromPhysicalId`<sup>Required</sup> <a name="ImportFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```go
func ImportFromPhysicalId() *string
```

- *Type:* *string

---

##### `LoadTemplateFromUrl`<sup>Required</sup> <a name="LoadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```go
func LoadTemplateFromUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductProvisioningArtifactParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogCloudformationProductProvisioningArtifactParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```go
func Get(index *f64) ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo">PutInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">ResetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo">ResetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfo` <a name="PutInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo"></a>

```go
func PutInfo(value ServicecatalogCloudformationProductProvisioningArtifactParametersInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableTemplateValidation` <a name="ResetDisableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```go
func ResetDisableTemplateValidation()
```

##### `ResetInfo` <a name="ResetInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo"></a>

```go
func ResetInfo()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">DisableTemplateValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput">InfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">DisableTemplateValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```go
func Info() ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableTemplateValidationInput`<sup>Optional</sup> <a name="DisableTemplateValidationInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```go
func DisableTemplateValidationInput() interface{}
```

- *Type:* interface{}

---

##### `InfoInput`<sup>Optional</sup> <a name="InfoInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput"></a>

```go
func InfoInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableTemplateValidation`<sup>Required</sup> <a name="DisableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```go
func DisableTemplateValidation() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath">ResetArtifactPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn">ResetConnectionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactPath` <a name="ResetArtifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath"></a>

```go
func ResetArtifactPath()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetConnectionArn` <a name="ResetConnectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn"></a>

```go
func ResetConnectionArn()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput">ArtifactPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactPathInput`<sup>Optional</sup> <a name="ArtifactPathInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput"></a>

```go
func ArtifactPathInput() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput"></a>

```go
func ConnectionArnInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```go
func ArtifactPath() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```go
func ConnectionArn() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar">PutCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar">ResetCodeStar</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeStar` <a name="PutCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar"></a>

```go
func PutCodeStar(value ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `ResetCodeStar` <a name="ResetCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar"></a>

```go
func ResetCodeStar()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">CodeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput">CodeStarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeStar`<sup>Required</sup> <a name="CodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```go
func CodeStar() ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `CodeStarInput`<sup>Optional</sup> <a name="CodeStarInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput"></a>

```go
func CodeStarInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductSourceConnectionOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductSourceConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogCloudformationProductSourceConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters">PutConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters">ResetConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectionParameters` <a name="PutConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters"></a>

```go
func PutConnectionParameters(value ServicecatalogCloudformationProductSourceConnectionConnectionParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `ResetConnectionParameters` <a name="ResetConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters"></a>

```go
func ResetConnectionParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">ConnectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput">ConnectionParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionParameters`<sup>Required</sup> <a name="ConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```go
func ConnectionParameters() ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `ConnectionParametersInput`<sup>Optional</sup> <a name="ConnectionParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput"></a>

```go
func ConnectionParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductTagsList <a name="ServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogCloudformationProductTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get"></a>

```go
func Get(index *f64) ServicecatalogCloudformationProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProductTagsOutputReference <a name="ServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationproduct"

servicecatalogcloudformationproduct.NewServicecatalogCloudformationProductTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogCloudformationProductTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



