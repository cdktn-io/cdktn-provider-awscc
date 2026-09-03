# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktn/provider-awscc.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database awscc_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.NewLightsailDatabase(scope Construct, id *string, config LightsailDatabaseConfig) LightsailDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters">PutRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention">ResetBackupRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier">ResetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword">ResetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters">ResetRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword">ResetRotateMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRelationalDatabaseParameters` <a name="PutRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters"></a>

```go
func PutRelationalDatabaseParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupRetention` <a name="ResetBackupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention"></a>

```go
func ResetBackupRetention()
```

##### `ResetCaCertificateIdentifier` <a name="ResetCaCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier"></a>

```go
func ResetCaCertificateIdentifier()
```

##### `ResetMasterUserPassword` <a name="ResetMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword"></a>

```go
func ResetMasterUserPassword()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetRelationalDatabaseParameters` <a name="ResetRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters"></a>

```go
func ResetRelationalDatabaseParameters()
```

##### `ResetRotateMasterUserPassword` <a name="ResetRotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword"></a>

```go
func ResetRotateMasterUserPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.LightsailDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters">RelationalDatabaseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput">BackupRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput">CaCertificateIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">MasterDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput">MasterUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput">RelationalDatabaseBlueprintIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput">RelationalDatabaseBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">RelationalDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput">RelationalDatabaseParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput">RotateMasterUserPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention">BackupRetention</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId">RelationalDatabaseBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId">RelationalDatabaseBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword">RotateMasterUserPassword</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn"></a>

```go
func DatabaseArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RelationalDatabaseParameters`<sup>Required</sup> <a name="RelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters"></a>

```go
func RelationalDatabaseParameters() LightsailDatabaseRelationalDatabaseParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags"></a>

```go
func Tags() LightsailDatabaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupRetentionInput`<sup>Optional</sup> <a name="BackupRetentionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput"></a>

```go
func BackupRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `CaCertificateIdentifierInput`<sup>Optional</sup> <a name="CaCertificateIdentifierInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput"></a>

```go
func CaCertificateIdentifierInput() *string
```

- *Type:* *string

---

##### `MasterDatabaseNameInput`<sup>Optional</sup> <a name="MasterDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```go
func MasterDatabaseNameInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `MasterUserPasswordInput`<sup>Optional</sup> <a name="MasterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput"></a>

```go
func MasterUserPasswordInput() *string
```

- *Type:* *string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `RelationalDatabaseBlueprintIdInput`<sup>Optional</sup> <a name="RelationalDatabaseBlueprintIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput"></a>

```go
func RelationalDatabaseBlueprintIdInput() *string
```

- *Type:* *string

---

##### `RelationalDatabaseBundleIdInput`<sup>Optional</sup> <a name="RelationalDatabaseBundleIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput"></a>

```go
func RelationalDatabaseBundleIdInput() *string
```

- *Type:* *string

---

##### `RelationalDatabaseNameInput`<sup>Optional</sup> <a name="RelationalDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```go
func RelationalDatabaseNameInput() *string
```

- *Type:* *string

---

##### `RelationalDatabaseParametersInput`<sup>Optional</sup> <a name="RelationalDatabaseParametersInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput"></a>

```go
func RelationalDatabaseParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RotateMasterUserPasswordInput`<sup>Optional</sup> <a name="RotateMasterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput"></a>

```go
func RotateMasterUserPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupRetention`<sup>Required</sup> <a name="BackupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention"></a>

```go
func BackupRetention() interface{}
```

- *Type:* interface{}

---

##### `CaCertificateIdentifier`<sup>Required</sup> <a name="CaCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```go
func CaCertificateIdentifier() *string
```

- *Type:* *string

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```go
func MasterDatabaseName() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `MasterUserPassword`<sup>Required</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword"></a>

```go
func MasterUserPassword() *string
```

- *Type:* *string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `RelationalDatabaseBlueprintId`<sup>Required</sup> <a name="RelationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId"></a>

```go
func RelationalDatabaseBlueprintId() *string
```

- *Type:* *string

---

##### `RelationalDatabaseBundleId`<sup>Required</sup> <a name="RelationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId"></a>

```go
func RelationalDatabaseBundleId() *string
```

- *Type:* *string

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```go
func RelationalDatabaseName() *string
```

- *Type:* *string

---

##### `RotateMasterUserPassword`<sup>Required</sup> <a name="RotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword"></a>

```go
func RotateMasterUserPassword() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

&lightsaildatabase.LightsailDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MasterDatabaseName: *string,
	MasterUsername: *string,
	RelationalDatabaseBlueprintId: *string,
	RelationalDatabaseBundleId: *string,
	RelationalDatabaseName: *string,
	AvailabilityZone: *string,
	BackupRetention: interface{},
	CaCertificateIdentifier: *string,
	MasterUserPassword: *string,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	RelationalDatabaseParameters: interface{},
	RotateMasterUserPassword: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>*string</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId">RelationalDatabaseBlueprintId</a></code> | <code>*string</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId">RelationalDatabaseBundleId</a></code> | <code>*string</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>*string</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention">BackupRetention</a></code> | <code>interface{}</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>*string</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword">MasterUserPassword</a></code> | <code>*string</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters">RelationalDatabaseParameters</a></code> | <code>interface{}</code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword">RotateMasterUserPassword</a></code> | <code>interface{}</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```go
MasterDatabaseName *string
```

- *Type:* *string

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `RelationalDatabaseBlueprintId`<sup>Required</sup> <a name="RelationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId"></a>

```go
RelationalDatabaseBlueprintId *string
```

- *Type:* *string

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `RelationalDatabaseBundleId`<sup>Required</sup> <a name="RelationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId"></a>

```go
RelationalDatabaseBundleId *string
```

- *Type:* *string

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```go
RelationalDatabaseName *string
```

- *Type:* *string

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `BackupRetention`<sup>Optional</sup> <a name="BackupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention"></a>

```go
BackupRetention interface{}
```

- *Type:* interface{}

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `CaCertificateIdentifier`<sup>Optional</sup> <a name="CaCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier"></a>

```go
CaCertificateIdentifier *string
```

- *Type:* *string

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `MasterUserPassword`<sup>Optional</sup> <a name="MasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword"></a>

```go
MasterUserPassword *string
```

- *Type:* *string

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `RelationalDatabaseParameters`<sup>Optional</sup> <a name="RelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters"></a>

```go
RelationalDatabaseParameters interface{}
```

- *Type:* interface{}

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `RotateMasterUserPassword`<sup>Optional</sup> <a name="RotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword"></a>

```go
RotateMasterUserPassword interface{}
```

- *Type:* interface{}

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

### LightsailDatabaseRelationalDatabaseParameters <a name="LightsailDatabaseRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

&lightsaildatabase.LightsailDatabaseRelationalDatabaseParameters {
	AllowedValues: *string,
	ApplyMethod: *string,
	ApplyType: *string,
	DataType: *string,
	Description: *string,
	IsModifiable: interface{},
	ParameterName: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues">AllowedValues</a></code> | <code>*string</code> | Specifies the valid range of values for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod">ApplyMethod</a></code> | <code>*string</code> | Indicates when parameter updates are applied. Can be immediate or pending-reboot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType">ApplyType</a></code> | <code>*string</code> | Specifies the engine-specific parameter type. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType">DataType</a></code> | <code>*string</code> | Specifies the valid data type for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description">Description</a></code> | <code>*string</code> | Provides a description of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable">IsModifiable</a></code> | <code>interface{}</code> | A Boolean value indicating whether the parameter can be modified. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Specifies the name of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | Specifies the value of the parameter. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues"></a>

```go
AllowedValues *string
```

- *Type:* *string

Specifies the valid range of values for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#allowed_values LightsailDatabase#allowed_values}

---

##### `ApplyMethod`<sup>Optional</sup> <a name="ApplyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod"></a>

```go
ApplyMethod *string
```

- *Type:* *string

Indicates when parameter updates are applied. Can be immediate or pending-reboot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#apply_method LightsailDatabase#apply_method}

---

##### `ApplyType`<sup>Optional</sup> <a name="ApplyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType"></a>

```go
ApplyType *string
```

- *Type:* *string

Specifies the engine-specific parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#apply_type LightsailDatabase#apply_type}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Specifies the valid data type for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#data_type LightsailDatabase#data_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Provides a description of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#description LightsailDatabase#description}

---

##### `IsModifiable`<sup>Optional</sup> <a name="IsModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable"></a>

```go
IsModifiable interface{}
```

- *Type:* interface{}

A Boolean value indicating whether the parameter can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#is_modifiable LightsailDatabase#is_modifiable}

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Specifies the name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#parameter_name LightsailDatabase#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

Specifies the value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#parameter_value LightsailDatabase#parameter_value}

---

### LightsailDatabaseTags <a name="LightsailDatabaseTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

&lightsaildatabase.LightsailDatabaseTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#key LightsailDatabase#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#value LightsailDatabase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDatabaseRelationalDatabaseParametersList <a name="LightsailDatabaseRelationalDatabaseParametersList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.NewLightsailDatabaseRelationalDatabaseParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailDatabaseRelationalDatabaseParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get"></a>

```go
func Get(index *f64) LightsailDatabaseRelationalDatabaseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailDatabaseRelationalDatabaseParametersOutputReference <a name="LightsailDatabaseRelationalDatabaseParametersOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.NewLightsailDatabaseRelationalDatabaseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailDatabaseRelationalDatabaseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod">ResetApplyMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType">ResetApplyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable">ResetIsModifiable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues"></a>

```go
func ResetAllowedValues()
```

##### `ResetApplyMethod` <a name="ResetApplyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod"></a>

```go
func ResetApplyMethod()
```

##### `ResetApplyType` <a name="ResetApplyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType"></a>

```go
func ResetApplyType()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIsModifiable` <a name="ResetIsModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable"></a>

```go
func ResetIsModifiable()
```

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName"></a>

```go
func ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput">ApplyMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput">ApplyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput">IsModifiableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod">ApplyMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType">ApplyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable">IsModifiable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput"></a>

```go
func AllowedValuesInput() *string
```

- *Type:* *string

---

##### `ApplyMethodInput`<sup>Optional</sup> <a name="ApplyMethodInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput"></a>

```go
func ApplyMethodInput() *string
```

- *Type:* *string

---

##### `ApplyTypeInput`<sup>Optional</sup> <a name="ApplyTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput"></a>

```go
func ApplyTypeInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IsModifiableInput`<sup>Optional</sup> <a name="IsModifiableInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput"></a>

```go
func IsModifiableInput() interface{}
```

- *Type:* interface{}

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *string
```

- *Type:* *string

---

##### `ApplyMethod`<sup>Required</sup> <a name="ApplyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod"></a>

```go
func ApplyMethod() *string
```

- *Type:* *string

---

##### `ApplyType`<sup>Required</sup> <a name="ApplyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType"></a>

```go
func ApplyType() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsModifiable`<sup>Required</sup> <a name="IsModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable"></a>

```go
func IsModifiable() interface{}
```

- *Type:* interface{}

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailDatabaseTagsList <a name="LightsailDatabaseTagsList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.NewLightsailDatabaseTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailDatabaseTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get"></a>

```go
func Get(index *f64) LightsailDatabaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailDatabaseTagsOutputReference <a name="LightsailDatabaseTagsOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsaildatabase"

lightsaildatabase.NewLightsailDatabaseTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailDatabaseTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



