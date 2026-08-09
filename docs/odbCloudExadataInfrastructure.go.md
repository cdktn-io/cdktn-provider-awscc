# `odbCloudExadataInfrastructure` Submodule <a name="`odbCloudExadataInfrastructure` Submodule" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudExadataInfrastructure <a name="OdbCloudExadataInfrastructure" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructure(scope Construct, id *string, config OdbCloudExadataInfrastructureConfig) OdbCloudExadataInfrastructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig">OdbCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig">OdbCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci">PutCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci">ResetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType">ResetDatabaseServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType">ResetStorageServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerContactsToSendToOci` <a name="PutCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci"></a>

```go
func PutCustomerContactsToSendToOci(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value OdbCloudExadataInfrastructureMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId"></a>

```go
func ResetAvailabilityZoneId()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount"></a>

```go
func ResetComputeCount()
```

##### `ResetCustomerContactsToSendToOci` <a name="ResetCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci"></a>

```go
func ResetCustomerContactsToSendToOci()
```

##### `ResetDatabaseServerType` <a name="ResetDatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType"></a>

```go
func ResetDatabaseServerType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetShape` <a name="ResetShape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape"></a>

```go
func ResetShape()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount"></a>

```go
func ResetStorageCount()
```

##### `ResetStorageServerType` <a name="ResetStorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType"></a>

```go
func ResetStorageServerType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.OdbCloudExadataInfrastructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.OdbCloudExadataInfrastructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.OdbCloudExadataInfrastructure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.OdbCloudExadataInfrastructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdbCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs">AvailableStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn">CloudExadataInfrastructureArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds">DbServerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion">DbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount">MaxCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs">MaxDataStorageInTBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs">MaxDbNodeStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs">MaxMemoryInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion">StorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs">TotalStorageSizeInGBs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput">CustomerContactsToSendToOciInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput">DatabaseServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput">StorageCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput">StorageServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType">DatabaseServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount">StorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType">StorageServerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```go
func ActivatedStorageCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```go
func AdditionalStorageCount() *f64
```

- *Type:* *f64

---

##### `AvailableStorageSizeInGBs`<sup>Required</sup> <a name="AvailableStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs"></a>

```go
func AvailableStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructureArn`<sup>Required</sup> <a name="CloudExadataInfrastructureArn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn"></a>

```go
func CloudExadataInfrastructureArn() *string
```

- *Type:* *string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```go
func CustomerContactsToSendToOci() OdbCloudExadataInfrastructureCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs"></a>

```go
func DataStorageSizeInTBs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs"></a>

```go
func DbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `DbServerIds`<sup>Required</sup> <a name="DbServerIds" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds"></a>

```go
func DbServerIds() *[]*string
```

- *Type:* *[]*string

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```go
func DbServerVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() OdbCloudExadataInfrastructureMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```go
func MaxCpuCount() *f64
```

- *Type:* *f64

---

##### `MaxDataStorageInTBs`<sup>Required</sup> <a name="MaxDataStorageInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs"></a>

```go
func MaxDataStorageInTBs() *f64
```

- *Type:* *f64

---

##### `MaxDbNodeStorageSizeInGBs`<sup>Required</sup> <a name="MaxDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs"></a>

```go
func MaxDbNodeStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInGBs`<sup>Required</sup> <a name="MaxMemoryInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs"></a>

```go
func MaxMemoryInGBs() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs"></a>

```go
func MemorySizeInGBs() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```go
func StorageServerVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags"></a>

```go
func Tags() OdbCloudExadataInfrastructureTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a>

---

##### `TotalStorageSizeInGBs`<sup>Required</sup> <a name="TotalStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs"></a>

```go
func TotalStorageSizeInGBs() *f64
```

- *Type:* *f64

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput"></a>

```go
func AvailabilityZoneIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `CustomerContactsToSendToOciInput`<sup>Optional</sup> <a name="CustomerContactsToSendToOciInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput"></a>

```go
func CustomerContactsToSendToOciInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseServerTypeInput`<sup>Optional</sup> <a name="DatabaseServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput"></a>

```go
func DatabaseServerTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput"></a>

```go
func StorageCountInput() *f64
```

- *Type:* *f64

---

##### `StorageServerTypeInput`<sup>Optional</sup> <a name="StorageServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput"></a>

```go
func StorageServerTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `DatabaseServerType`<sup>Required</sup> <a name="DatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType"></a>

```go
func DatabaseServerType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount"></a>

```go
func StorageCount() *f64
```

- *Type:* *f64

---

##### `StorageServerType`<sup>Required</sup> <a name="StorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType"></a>

```go
func StorageServerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudExadataInfrastructureConfig <a name="OdbCloudExadataInfrastructureConfig" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

&odbcloudexadatainfrastructure.OdbCloudExadataInfrastructureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	AvailabilityZoneId: *string,
	ComputeCount: *f64,
	CustomerContactsToSendToOci: interface{},
	DatabaseServerType: *string,
	DisplayName: *string,
	MaintenanceWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow,
	Shape: *string,
	StorageCount: *f64,
	StorageServerType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | The number of database servers for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code>interface{}</code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType">DatabaseServerType</a></code> | <code>*string</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-friendly name for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape">Shape</a></code> | <code>*string</code> | The model name of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount">StorageCount</a></code> | <code>*f64</code> | The number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType">StorageServerType</a></code> | <code>*string</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Exadata Infrastructure. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId"></a>

```go
AvailabilityZoneId *string
```

- *Type:* *string

The AZ ID of the AZ where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

The number of database servers for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `CustomerContactsToSendToOci`<sup>Optional</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci"></a>

```go
CustomerContactsToSendToOci interface{}
```

- *Type:* interface{}

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `DatabaseServerType`<sup>Optional</sup> <a name="DatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType"></a>

```go
DatabaseServerType *string
```

- *Type:* *string

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-friendly name for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow OdbCloudExadataInfrastructureMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

The model name of the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount"></a>

```go
StorageCount *f64
```

- *Type:* *f64

The number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `StorageServerType`<sup>Optional</sup> <a name="StorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType"></a>

```go
StorageServerType *string
```

- *Type:* *string

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}

---

### OdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

&odbcloudexadatainfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci {
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email">Email</a></code> | <code>*string</code> | The email address of the contact. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#email OdbCloudExadataInfrastructure#email}

---

### OdbCloudExadataInfrastructureMaintenanceWindow <a name="OdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

&odbcloudexadatainfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow {
	CustomActionTimeoutInMins: *f64,
	DaysOfWeek: *[]*string,
	HoursOfDay: *[]*f64,
	IsCustomActionTimeoutEnabled: interface{},
	LeadTimeInWeeks: *f64,
	Months: *[]*string,
	PatchingMode: *string,
	Preference: *string,
	WeeksOfMonth: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | The timeout duration for custom actions in minutes. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | Indicates whether custom action timeout is enabled. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months">Months</a></code> | <code>*[]*string</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | The patching mode for the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference">Preference</a></code> | <code>*string</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | The weeks of the month when maintenance can be performed. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```go
CustomActionTimeoutInMins *f64
```

- *Type:* *f64

The timeout duration for custom actions in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins OdbCloudExadataInfrastructure#custom_action_timeout_in_mins}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#days_of_week OdbCloudExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```go
HoursOfDay *[]*f64
```

- *Type:* *[]*f64

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day OdbCloudExadataInfrastructure#hours_of_day}

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```go
IsCustomActionTimeoutEnabled interface{}
```

- *Type:* interface{}

Indicates whether custom action timeout is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OdbCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```go
LeadTimeInWeeks *f64
```

- *Type:* *f64

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks OdbCloudExadataInfrastructure#lead_time_in_weeks}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months"></a>

```go
Months *[]*string
```

- *Type:* *[]*string

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#months OdbCloudExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```go
PatchingMode *string
```

- *Type:* *string

The patching mode for the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#patching_mode OdbCloudExadataInfrastructure#patching_mode}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference"></a>

```go
Preference *string
```

- *Type:* *string

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#preference OdbCloudExadataInfrastructure#preference}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*f64
```

- *Type:* *[]*f64

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month OdbCloudExadataInfrastructure#weeks_of_month}

---

### OdbCloudExadataInfrastructureTags <a name="OdbCloudExadataInfrastructureTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

&odbcloudexadatainfrastructure.OdbCloudExadataInfrastructureTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_exadata_infrastructure#value OdbCloudExadataInfrastructure#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructureCustomerContactsToSendToOciList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudExadataInfrastructureCustomerContactsToSendToOciList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```go
func Get(index *f64) OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail"></a>

```go
func ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructureMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OdbCloudExadataInfrastructureMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```go
func ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```go
func ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```go
func ResetIsCustomActionTimeoutEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```go
func ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```go
func ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```go
func ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```go
func CustomActionTimeoutInMinsInput() *f64
```

- *Type:* *f64

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```go
func HoursOfDayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```go
func IsCustomActionTimeoutEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```go
func LeadTimeInWeeksInput() *f64
```

- *Type:* *f64

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```go
func MonthsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```go
func PatchingModeInput() *string
```

- *Type:* *string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *string
```

- *Type:* *string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudExadataInfrastructureTagsList <a name="OdbCloudExadataInfrastructureTagsList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbCloudExadataInfrastructureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get"></a>

```go
func Get(index *f64) OdbCloudExadataInfrastructureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbCloudExadataInfrastructureTagsOutputReference <a name="OdbCloudExadataInfrastructureTagsOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbcloudexadatainfrastructure"

odbcloudexadatainfrastructure.NewOdbCloudExadataInfrastructureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbCloudExadataInfrastructureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



