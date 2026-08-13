# `glueCatalog` Submodule <a name="`glueCatalog` Submodule" id="@cdktn/provider-awscc.glueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalog <a name="GlueCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog awscc_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalog(scope Construct, id *string, config GlueCatalogConfig) GlueCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig">GlueCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig">GlueCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties">PutCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions">PutCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions">PutCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog">PutFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog">PutTargetRedshiftCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess">ResetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCatalogProperties">ResetCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions">ResetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions">ResetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetFederatedCatalog">ResetFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault">ResetOverwriteChildResourcePermissionsWithDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog">ResetTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatalogProperties` <a name="PutCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties"></a>

```go
func PutCatalogProperties(value GlueCatalogCatalogProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCatalogProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---

##### `PutCreateDatabaseDefaultPermissions` <a name="PutCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions"></a>

```go
func PutCreateDatabaseDefaultPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCreateTableDefaultPermissions` <a name="PutCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions"></a>

```go
func PutCreateTableDefaultPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFederatedCatalog` <a name="PutFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog"></a>

```go
func PutFederatedCatalog(value GlueCatalogFederatedCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putFederatedCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetRedshiftCatalog` <a name="PutTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog"></a>

```go
func PutTargetRedshiftCatalog(value GlueCatalogTargetRedshiftCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.putTargetRedshiftCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---

##### `ResetAllowFullTableExternalDataAccess` <a name="ResetAllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess"></a>

```go
func ResetAllowFullTableExternalDataAccess()
```

##### `ResetCatalogProperties` <a name="ResetCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCatalogProperties"></a>

```go
func ResetCatalogProperties()
```

##### `ResetCreateDatabaseDefaultPermissions` <a name="ResetCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions"></a>

```go
func ResetCreateDatabaseDefaultPermissions()
```

##### `ResetCreateTableDefaultPermissions` <a name="ResetCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions"></a>

```go
func ResetCreateTableDefaultPermissions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFederatedCatalog` <a name="ResetFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetFederatedCatalog"></a>

```go
func ResetFederatedCatalog()
```

##### `ResetOverwriteChildResourcePermissionsWithDefault` <a name="ResetOverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault"></a>

```go
func ResetOverwriteChildResourcePermissionsWithDefault()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetRedshiftCatalog` <a name="ResetTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog"></a>

```go
func ResetTargetRedshiftCatalog()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.GlueCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.GlueCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.GlueCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.GlueCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogProperties">CatalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference">GlueCatalogCatalogPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTime">CreateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalog">FederatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference">GlueCatalogFederatedCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList">GlueCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalog">TargetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference">GlueCatalogTargetRedshiftCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.updateTime">UpdateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput">AllowFullTableExternalDataAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogPropertiesInput">CatalogPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput">CreateDatabaseDefaultPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput">CreateTableDefaultPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalogInput">FederatedCatalogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput">OverwriteChildResourcePermissionsWithDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput">TargetRedshiftCatalogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault">OverwriteChildResourcePermissionsWithDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `CatalogProperties`<sup>Required</sup> <a name="CatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogProperties"></a>

```go
func CatalogProperties() GlueCatalogCatalogPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference">GlueCatalogCatalogPropertiesOutputReference</a>

---

##### `CreateDatabaseDefaultPermissions`<sup>Required</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions"></a>

```go
func CreateDatabaseDefaultPermissions() GlueCatalogCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissions"></a>

```go
func CreateTableDefaultPermissions() GlueCatalogCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTime"></a>

```go
func CreateTime() *f64
```

- *Type:* *f64

---

##### `FederatedCatalog`<sup>Required</sup> <a name="FederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalog"></a>

```go
func FederatedCatalog() GlueCatalogFederatedCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference">GlueCatalogFederatedCatalogOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tags"></a>

```go
func Tags() GlueCatalogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList">GlueCatalogTagsList</a>

---

##### `TargetRedshiftCatalog`<sup>Required</sup> <a name="TargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalog"></a>

```go
func TargetRedshiftCatalog() GlueCatalogTargetRedshiftCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference">GlueCatalogTargetRedshiftCatalogOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.updateTime"></a>

```go
func UpdateTime() *f64
```

- *Type:* *f64

---

##### `AllowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="AllowFullTableExternalDataAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput"></a>

```go
func AllowFullTableExternalDataAccessInput() *string
```

- *Type:* *string

---

##### `CatalogPropertiesInput`<sup>Optional</sup> <a name="CatalogPropertiesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.catalogPropertiesInput"></a>

```go
func CatalogPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="CreateDatabaseDefaultPermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput"></a>

```go
func CreateDatabaseDefaultPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateTableDefaultPermissionsInput`<sup>Optional</sup> <a name="CreateTableDefaultPermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput"></a>

```go
func CreateTableDefaultPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FederatedCatalogInput`<sup>Optional</sup> <a name="FederatedCatalogInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.federatedCatalogInput"></a>

```go
func FederatedCatalogInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OverwriteChildResourcePermissionsWithDefaultInput`<sup>Optional</sup> <a name="OverwriteChildResourcePermissionsWithDefaultInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput"></a>

```go
func OverwriteChildResourcePermissionsWithDefaultInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRedshiftCatalogInput`<sup>Optional</sup> <a name="TargetRedshiftCatalogInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput"></a>

```go
func TargetRedshiftCatalogInput() interface{}
```

- *Type:* interface{}

---

##### `AllowFullTableExternalDataAccess`<sup>Required</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess"></a>

```go
func AllowFullTableExternalDataAccess() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OverwriteChildResourcePermissionsWithDefault`<sup>Required</sup> <a name="OverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```go
func OverwriteChildResourcePermissionsWithDefault() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogCatalogProperties <a name="GlueCatalogCatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCatalogProperties {
	DataLakeAccessProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties">DataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | Data lake access properties for the catalog. |

---

##### `DataLakeAccessProperties`<sup>Optional</sup> <a name="DataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties"></a>

```go
DataLakeAccessProperties GlueCatalogCatalogPropertiesDataLakeAccessProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

Data lake access properties for the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}

---

### GlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="GlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties {
	AllowFullTableExternalDataAccess: *string,
	CatalogType: *string,
	DataLakeAccess: interface{},
	DataTransferRole: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>*string</code> | Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType">CatalogType</a></code> | <code>*string</code> | Specifies a federated catalog type for the native catalog resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess">DataLakeAccess</a></code> | <code>interface{}</code> | Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole">DataTransferRole</a></code> | <code>*string</code> | A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey">KmsKey</a></code> | <code>*string</code> | An encryption key that will be used for the staging bucket that will be created along with the catalog. |

---

##### `AllowFullTableExternalDataAccess`<sup>Optional</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.allowFullTableExternalDataAccess"></a>

```go
AllowFullTableExternalDataAccess *string
```

- *Type:* *string

Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}

---

##### `CatalogType`<sup>Optional</sup> <a name="CatalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType"></a>

```go
CatalogType *string
```

- *Type:* *string

Specifies a federated catalog type for the native catalog resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}

---

##### `DataLakeAccess`<sup>Optional</sup> <a name="DataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess"></a>

```go
DataLakeAccess interface{}
```

- *Type:* interface{}

Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}

---

##### `DataTransferRole`<sup>Optional</sup> <a name="DataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole"></a>

```go
DataTransferRole *string
```

- *Type:* *string

A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

An encryption key that will be used for the staging bucket that will be created along with the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}

---

### GlueCatalogConfig <a name="GlueCatalogConfig" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowFullTableExternalDataAccess: *string,
	CatalogProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogCatalogProperties,
	CreateDatabaseDefaultPermissions: interface{},
	CreateTableDefaultPermissions: interface{},
	Description: *string,
	FederatedCatalog: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogFederatedCatalog,
	OverwriteChildResourcePermissionsWithDefault: *string,
	Parameters: *map[string]*string,
	Tags: interface{},
	TargetRedshiftCatalog: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.name">Name</a></code> | <code>*string</code> | The name of the catalog to create. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>*string</code> | Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.catalogProperties">CatalogProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | A structure that specifies data lake access properties and other custom properties. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code>interface{}</code> | An array of PrincipalPermissions objects for default database permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code>interface{}</code> | An array of PrincipalPermissions objects for default table permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.description">Description</a></code> | <code>*string</code> | A description of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.federatedCatalog">FederatedCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | A FederatedCatalog structure that references an entity outside the Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault">OverwriteChildResourcePermissionsWithDefault</a></code> | <code>*string</code> | Specifies whether to overwrite child resource permissions with the default permissions. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | A map of key-value pairs that define parameters and properties of the catalog. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog">TargetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | A structure that describes a target catalog for resource linking. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the catalog to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#name GlueCatalog#name}

---

##### `AllowFullTableExternalDataAccess`<sup>Optional</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess"></a>

```go
AllowFullTableExternalDataAccess *string
```

- *Type:* *string

Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}

---

##### `CatalogProperties`<sup>Optional</sup> <a name="CatalogProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.catalogProperties"></a>

```go
CatalogProperties GlueCatalogCatalogProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

A structure that specifies data lake access properties and other custom properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `CreateDatabaseDefaultPermissions`<sup>Optional</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions"></a>

```go
CreateDatabaseDefaultPermissions interface{}
```

- *Type:* interface{}

An array of PrincipalPermissions objects for default database permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `CreateTableDefaultPermissions`<sup>Optional</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions"></a>

```go
CreateTableDefaultPermissions interface{}
```

- *Type:* interface{}

An array of PrincipalPermissions objects for default table permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#description GlueCatalog#description}

---

##### `FederatedCatalog`<sup>Optional</sup> <a name="FederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.federatedCatalog"></a>

```go
FederatedCatalog GlueCatalogFederatedCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

A FederatedCatalog structure that references an entity outside the Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `OverwriteChildResourcePermissionsWithDefault`<sup>Optional</sup> <a name="OverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault"></a>

```go
OverwriteChildResourcePermissionsWithDefault *string
```

- *Type:* *string

Specifies whether to overwrite child resource permissions with the default permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

A map of key-value pairs that define parameters and properties of the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#tags GlueCatalog#tags}

---

##### `TargetRedshiftCatalog`<sup>Optional</sup> <a name="TargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog"></a>

```go
TargetRedshiftCatalog GlueCatalogTargetRedshiftCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

A structure that describes a target catalog for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

### GlueCatalogCreateDatabaseDefaultPermissions <a name="GlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCreateDatabaseDefaultPermissions {
	Permissions: *[]*string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | The Lake Formation principal. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal"></a>

```go
Principal GlueCatalogCreateDatabaseDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

The Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal {
	DataLakePrincipalIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | An identifier for the Lake Formation principal. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```go
DataLakePrincipalIdentifier *string
```

- *Type:* *string

An identifier for the Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}

---

### GlueCatalogCreateTableDefaultPermissions <a name="GlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCreateTableDefaultPermissions {
	Permissions: *[]*string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | The Lake Formation principal. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal"></a>

```go
Principal GlueCatalogCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

The Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateTableDefaultPermissionsPrincipal <a name="GlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal {
	DataLakePrincipalIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | An identifier for the Lake Formation principal. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```go
DataLakePrincipalIdentifier *string
```

- *Type:* *string

An identifier for the Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}

---

### GlueCatalogFederatedCatalog <a name="GlueCatalogFederatedCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogFederatedCatalog {
	ConnectionName: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to an external data source. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.identifier">Identifier</a></code> | <code>*string</code> | A unique identifier for the federated catalog. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to an external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalog.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

A unique identifier for the federated catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}

---

### GlueCatalogTags <a name="GlueCatalogTags" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#key GlueCatalog#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#value GlueCatalog#value}

---

### GlueCatalogTargetRedshiftCatalog <a name="GlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

&gluecatalog.GlueCatalogTargetRedshiftCatalog {
	CatalogArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn">CatalogArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the catalog resource. |

---

##### `CatalogArn`<sup>Optional</sup> <a name="CatalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn"></a>

```go
CatalogArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the catalog resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetAllowFullTableExternalDataAccess">ResetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType">ResetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess">ResetDataLakeAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole">ResetDataTransferRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowFullTableExternalDataAccess` <a name="ResetAllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetAllowFullTableExternalDataAccess"></a>

```go
func ResetAllowFullTableExternalDataAccess()
```

##### `ResetCatalogType` <a name="ResetCatalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType"></a>

```go
func ResetCatalogType()
```

##### `ResetDataLakeAccess` <a name="ResetDataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess"></a>

```go
func ResetDataLakeAccess()
```

##### `ResetDataTransferRole` <a name="ResetDataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole"></a>

```go
func ResetDataTransferRole()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">ManagedWorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">ManagedWorkgroupStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">RedshiftDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccessInput">AllowFullTableExternalDataAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput">DataLakeAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput">DataTransferRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">DataLakeAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">DataTransferRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedWorkgroupName`<sup>Required</sup> <a name="ManagedWorkgroupName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```go
func ManagedWorkgroupName() *string
```

- *Type:* *string

---

##### `ManagedWorkgroupStatus`<sup>Required</sup> <a name="ManagedWorkgroupStatus" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```go
func ManagedWorkgroupStatus() *string
```

- *Type:* *string

---

##### `RedshiftDatabaseName`<sup>Required</sup> <a name="RedshiftDatabaseName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```go
func RedshiftDatabaseName() *string
```

- *Type:* *string

---

##### `AllowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="AllowFullTableExternalDataAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccessInput"></a>

```go
func AllowFullTableExternalDataAccessInput() *string
```

- *Type:* *string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput"></a>

```go
func CatalogTypeInput() *string
```

- *Type:* *string

---

##### `DataLakeAccessInput`<sup>Optional</sup> <a name="DataLakeAccessInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput"></a>

```go
func DataLakeAccessInput() interface{}
```

- *Type:* interface{}

---

##### `DataTransferRoleInput`<sup>Optional</sup> <a name="DataTransferRoleInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput"></a>

```go
func DataTransferRoleInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `AllowFullTableExternalDataAccess`<sup>Required</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess"></a>

```go
func AllowFullTableExternalDataAccess() *string
```

- *Type:* *string

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `DataLakeAccess`<sup>Required</sup> <a name="DataLakeAccess" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```go
func DataLakeAccess() interface{}
```

- *Type:* interface{}

---

##### `DataTransferRole`<sup>Required</sup> <a name="DataTransferRole" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```go
func DataTransferRole() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCatalogPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCatalogPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogCatalogPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties">PutDataLakeAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties">ResetDataLakeAccessProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataLakeAccessProperties` <a name="PutDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties"></a>

```go
func PutDataLakeAccessProperties(value GlueCatalogCatalogPropertiesDataLakeAccessProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---

##### `ResetDataLakeAccessProperties` <a name="ResetDataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties"></a>

```go
func ResetDataLakeAccessProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties">CustomProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">DataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput">DataLakeAccessPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```go
func CustomProperties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DataLakeAccessProperties`<sup>Required</sup> <a name="DataLakeAccessProperties" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```go
func DataLakeAccessProperties() GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a>

---

##### `DataLakeAccessPropertiesInput`<sup>Optional</sup> <a name="DataLakeAccessPropertiesInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput"></a>

```go
func DataLakeAccessPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateDatabaseDefaultPermissionsList <a name="GlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateDatabaseDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogCreateDatabaseDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```go
func Get(index *f64) GlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value GlueCatalogCreateDatabaseDefaultPermissionsPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```go
func ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```go
func DataLakePrincipalIdentifierInput() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateTableDefaultPermissionsList <a name="GlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateTableDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogCreateTableDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get"></a>

```go
func Get(index *f64) GlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateTableDefaultPermissionsOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateTableDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogCreateTableDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value GlueCatalogCreateTableDefaultPermissionsPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```go
func ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```go
func DataLakePrincipalIdentifierInput() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogFederatedCatalogOutputReference <a name="GlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogFederatedCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogFederatedCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTagsList <a name="GlueCatalogTagsList" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCatalogTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get"></a>

```go
func Get(index *f64) GlueCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTagsOutputReference <a name="GlueCatalogTagsOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCatalogTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCatalogTargetRedshiftCatalogOutputReference <a name="GlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecatalog"

gluecatalog.NewGlueCatalogTargetRedshiftCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCatalogTargetRedshiftCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resetCatalogArn">ResetCatalogArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogArn` <a name="ResetCatalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resetCatalogArn"></a>

```go
func ResetCatalogArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput">CatalogArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogArnInput`<sup>Optional</sup> <a name="CatalogArnInput" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput"></a>

```go
func CatalogArnInput() *string
```

- *Type:* *string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```go
func CatalogArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



