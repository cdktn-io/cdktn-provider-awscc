# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktn/provider-awscc.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake awscc_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLake(scope Construct, id *string, config SecuritylakeDataLakeConfig) SecuritylakeDataLake
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn">ResetMetaStoreManagerRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value SecuritylakeDataLakeEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration"></a>

```go
func PutLifecycleConfiguration(value SecuritylakeDataLakeLifecycleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration"></a>

```go
func PutReplicationConfiguration(value SecuritylakeDataLakeReplicationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetLifecycleConfiguration"></a>

```go
func ResetLifecycleConfiguration()
```

##### `ResetMetaStoreManagerRoleArn` <a name="ResetMetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetMetaStoreManagerRoleArn"></a>

```go
func ResetMetaStoreManagerRoleArn()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetReplicationConfiguration"></a>

```go
func ResetReplicationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.SecuritylakeDataLake_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.SecuritylakeDataLake_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.SecuritylakeDataLake_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.SecuritylakeDataLake_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecuritylakeDataLake resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">MetaStoreManagerRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() SecuritylakeDataLakeEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference">SecuritylakeDataLakeEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfiguration"></a>

```go
func LifecycleConfiguration() SecuritylakeDataLakeLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference">SecuritylakeDataLakeLifecycleConfigurationOutputReference</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfiguration"></a>

```go
func ReplicationConfiguration() SecuritylakeDataLakeReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference">SecuritylakeDataLakeReplicationConfigurationOutputReference</a>

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```go
func Tags() SecuritylakeDataLakeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList">SecuritylakeDataLakeTagsList</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.lifecycleConfigurationInput"></a>

```go
func LifecycleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MetaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="MetaStoreManagerRoleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```go
func MetaStoreManagerRoleArnInput() *string
```

- *Type:* *string

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.replicationConfigurationInput"></a>

```go
func ReplicationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `MetaStoreManagerRoleArn`<sup>Required</sup> <a name="MetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```go
func MetaStoreManagerRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration,
	LifecycleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration,
	MetaStoreManagerRoleArn: *string,
	ReplicationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a></code> | Provides encryption details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a></code> | Provides lifecycle details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a></code> | Provides replication details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration SecuritylakeDataLakeEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration">SecuritylakeDataLakeEncryptionConfiguration</a>

Provides encryption details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycleConfiguration"></a>

```go
LifecycleConfiguration SecuritylakeDataLakeLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration">SecuritylakeDataLakeLifecycleConfiguration</a>

Provides lifecycle details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `MetaStoreManagerRoleArn`<sup>Optional</sup> <a name="MetaStoreManagerRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```go
MetaStoreManagerRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.replicationConfiguration"></a>

```go
ReplicationConfiguration SecuritylakeDataLakeReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration">SecuritylakeDataLakeReplicationConfiguration</a>

Provides replication details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

### SecuritylakeDataLakeEncryptionConfiguration <a name="SecuritylakeDataLakeEncryptionConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeEncryptionConfiguration {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}

---

### SecuritylakeDataLakeLifecycleConfiguration <a name="SecuritylakeDataLakeLifecycleConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeLifecycleConfiguration {
	Expiration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration,
	Transitions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | Provides data expiration details of Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions">Transitions</a></code> | <code>interface{}</code> | Provides data storage transition details of Amazon Security Lake object. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.expiration"></a>

```go
Expiration SecuritylakeDataLakeLifecycleConfigurationExpiration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

Provides data expiration details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `Transitions`<sup>Optional</sup> <a name="Transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfiguration.property.transitions"></a>

```go
Transitions interface{}
```

- *Type:* interface{}

Provides data storage transition details of Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#transitions SecuritylakeDataLake#transitions}

---

### SecuritylakeDataLakeLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeLifecycleConfigurationExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeLifecycleConfigurationExpiration {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days">Days</a></code> | <code>*f64</code> | Number of days before data expires in the Amazon Security Lake object. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Number of days before data expires in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

### SecuritylakeDataLakeLifecycleConfigurationTransitions <a name="SecuritylakeDataLakeLifecycleConfigurationTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeLifecycleConfigurationTransitions {
	Days: *f64,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days">Days</a></code> | <code>*f64</code> | Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass">StorageClass</a></code> | <code>*string</code> | The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitions.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}

---

### SecuritylakeDataLakeReplicationConfiguration <a name="SecuritylakeDataLakeReplicationConfiguration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeReplicationConfiguration {
	Regions: *[]*string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions">Regions</a></code> | <code>*[]*string</code> | Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Replication settings for the Amazon S3 buckets. |

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets.

Amazon S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Replication settings for the Amazon S3 buckets.

This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}

---

### SecuritylakeDataLakeTags <a name="SecuritylakeDataLakeTags" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

&securitylakedatalake.SecuritylakeDataLakeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. You can specify a value that is 0 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#key SecuritylakeDataLake#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag. You can specify a value that is 0 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_data_lake#value SecuritylakeDataLake#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeDataLakeEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeLifecycleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeDataLakeLifecycleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions">PutTransitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions">ResetTransitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration"></a>

```go
func PutExpiration(value SecuritylakeDataLakeLifecycleConfigurationExpiration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpiration">SecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---

##### `PutTransitions` <a name="PutTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions"></a>

```go
func PutTransitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.putTransitions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetTransitions` <a name="ResetTransitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.resetTransitions"></a>

```go
func ResetTransitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions">Transitions</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput">TransitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration"></a>

```go
func Expiration() SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">SecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a>

---

##### `Transitions`<sup>Required</sup> <a name="Transitions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions"></a>

```go
func Transitions() SecuritylakeDataLakeLifecycleConfigurationTransitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList">SecuritylakeDataLakeLifecycleConfigurationTransitionsList</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() interface{}
```

- *Type:* interface{}

---

##### `TransitionsInput`<sup>Optional</sup> <a name="TransitionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitionsInput"></a>

```go
func TransitionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsList <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeLifecycleConfigurationTransitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeDataLakeLifecycleConfigurationTransitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get"></a>

```go
func Get(index *f64) SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference <a name="SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resetStorageClass"></a>

```go
func ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeReplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeDataLakeReplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeTagsList <a name="SecuritylakeDataLakeTagsList" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeDataLakeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get"></a>

```go
func Get(index *f64) SecuritylakeDataLakeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeDataLakeTagsOutputReference <a name="SecuritylakeDataLakeTagsOutputReference" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakedatalake"

securitylakedatalake.NewSecuritylakeDataLakeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeDataLakeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeDataLake.SecuritylakeDataLakeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



