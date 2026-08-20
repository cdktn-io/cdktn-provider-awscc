# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktn/provider-awscc.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespace(scope Construct, id *string, config RedshiftserverlessNamespaceConfig) RedshiftserverlessNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations">PutSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">ResetAdminPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">ResetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">ResetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod">ResetFinalSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">ResetManageAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy">ResetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn">ResetRedshiftIdcApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations">ResetSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSnapshotCopyConfigurations` <a name="PutSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations"></a>

```go
func PutSnapshotCopyConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdminPasswordSecretKmsKeyId` <a name="ResetAdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```go
func ResetAdminPasswordSecretKmsKeyId()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```go
func ResetAdminUsername()
```

##### `ResetAdminUserPassword` <a name="ResetAdminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```go
func ResetAdminUserPassword()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDefaultIamRoleArn` <a name="ResetDefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```go
func ResetDefaultIamRoleArn()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName"></a>

```go
func ResetFinalSnapshotName()
```

##### `ResetFinalSnapshotRetentionPeriod` <a name="ResetFinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod"></a>

```go
func ResetFinalSnapshotRetentionPeriod()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```go
func ResetLogExports()
```

##### `ResetManageAdminPassword` <a name="ResetManageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```go
func ResetManageAdminPassword()
```

##### `ResetNamespaceResourcePolicy` <a name="ResetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy"></a>

```go
func ResetNamespaceResourcePolicy()
```

##### `ResetRedshiftIdcApplicationArn` <a name="ResetRedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn"></a>

```go
func ResetRedshiftIdcApplicationArn()
```

##### `ResetSnapshotCopyConfigurations` <a name="ResetSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations"></a>

```go
func ResetSnapshotCopyConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.RedshiftserverlessNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace">Namespace</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations">SnapshotCopyConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">AdminPasswordSecretKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">AdminUserPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">DefaultIamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput">FinalSnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">LogExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">ManageAdminPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput">NamespaceResourcePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput">RedshiftIdcApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput">SnapshotCopyConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">AdminUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod">FinalSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">ManageAdminPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace"></a>

```go
func Namespace() RedshiftserverlessNamespaceNamespaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a>

---

##### `SnapshotCopyConfigurations`<sup>Required</sup> <a name="SnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations"></a>

```go
func SnapshotCopyConfigurations() RedshiftserverlessNamespaceSnapshotCopyConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```go
func Tags() RedshiftserverlessNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a>

---

##### `AdminPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="AdminPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```go
func AdminPasswordSecretKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `AdminUserPasswordInput`<sup>Optional</sup> <a name="AdminUserPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```go
func AdminUserPasswordInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArnInput`<sup>Optional</sup> <a name="DefaultIamRoleArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```go
func DefaultIamRoleArnInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput"></a>

```go
func FinalSnapshotNameInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="FinalSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput"></a>

```go
func FinalSnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```go
func LogExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManageAdminPasswordInput`<sup>Optional</sup> <a name="ManageAdminPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```go
func ManageAdminPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `NamespaceResourcePolicyInput`<sup>Optional</sup> <a name="NamespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput"></a>

```go
func NamespaceResourcePolicyInput() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArnInput`<sup>Optional</sup> <a name="RedshiftIdcApplicationArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput"></a>

```go
func RedshiftIdcApplicationArnInput() *string
```

- *Type:* *string

---

##### `SnapshotCopyConfigurationsInput`<sup>Optional</sup> <a name="SnapshotCopyConfigurationsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput"></a>

```go
func SnapshotCopyConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```go
func AdminPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AdminUserPassword`<sup>Required</sup> <a name="AdminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```go
func AdminUserPassword() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName"></a>

```go
func FinalSnapshotName() *string
```

- *Type:* *string

---

##### `FinalSnapshotRetentionPeriod`<sup>Required</sup> <a name="FinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod"></a>

```go
func FinalSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `ManageAdminPassword`<sup>Required</sup> <a name="ManageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```go
func ManageAdminPassword() interface{}
```

- *Type:* interface{}

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `NamespaceResourcePolicy`<sup>Required</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy"></a>

```go
func NamespaceResourcePolicy() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn"></a>

```go
func RedshiftIdcApplicationArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

&redshiftserverlessnamespace.RedshiftserverlessNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NamespaceName: *string,
	AdminPasswordSecretKmsKeyId: *string,
	AdminUsername: *string,
	AdminUserPassword: *string,
	DbName: *string,
	DefaultIamRoleArn: *string,
	FinalSnapshotName: *string,
	FinalSnapshotRetentionPeriod: *f64,
	IamRoles: *[]*string,
	KmsKeyId: *string,
	LogExports: *[]*string,
	ManageAdminPassword: interface{},
	NamespaceResourcePolicy: *string,
	RedshiftIdcApplicationArn: *string,
	SnapshotCopyConfigurations: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">AdminUserPassword</a></code> | <code>*string</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">DbName</a></code> | <code>*string</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod">FinalSnapshotRetentionPeriod</a></code> | <code>*f64</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">LogExports</a></code> | <code>*[]*string</code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">ManageAdminPassword</a></code> | <code>interface{}</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>*string</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations">SnapshotCopyConfigurations</a></code> | <code>interface{}</code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The list of tags for the namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `AdminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```go
AdminPasswordSecretKmsKeyId *string
```

- *Type:* *string

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `AdminUserPassword`<sup>Optional</sup> <a name="AdminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```go
AdminUserPassword *string
```

- *Type:* *string

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `DefaultIamRoleArn`<sup>Optional</sup> <a name="DefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```go
DefaultIamRoleArn *string
```

- *Type:* *string

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName"></a>

```go
FinalSnapshotName *string
```

- *Type:* *string

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `FinalSnapshotRetentionPeriod`<sup>Optional</sup> <a name="FinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod"></a>

```go
FinalSnapshotRetentionPeriod *f64
```

- *Type:* *f64

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```go
LogExports *[]*string
```

- *Type:* *[]*string

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `ManageAdminPassword`<sup>Optional</sup> <a name="ManageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```go
ManageAdminPassword interface{}
```

- *Type:* interface{}

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `NamespaceResourcePolicy`<sup>Optional</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy"></a>

```go
NamespaceResourcePolicy *string
```

- *Type:* *string

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `RedshiftIdcApplicationArn`<sup>Optional</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn"></a>

```go
RedshiftIdcApplicationArn *string
```

- *Type:* *string

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `SnapshotCopyConfigurations`<sup>Optional</sup> <a name="SnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations"></a>

```go
SnapshotCopyConfigurations interface{}
```

- *Type:* interface{}

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

### RedshiftserverlessNamespaceNamespace <a name="RedshiftserverlessNamespaceNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

&redshiftserverlessnamespace.RedshiftserverlessNamespaceNamespace {

}
```


### RedshiftserverlessNamespaceSnapshotCopyConfigurations <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

&redshiftserverlessnamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations {
	DestinationKmsKeyId: *string,
	DestinationRegion: *string,
	SnapshotRetentionPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId">DestinationKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod">SnapshotRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}. |

---

##### `DestinationKmsKeyId`<sup>Optional</sup> <a name="DestinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId"></a>

```go
DestinationKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}.

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion"></a>

```go
DestinationRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}.

---

##### `SnapshotRetentionPeriod`<sup>Optional</sup> <a name="SnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod"></a>

```go
SnapshotRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}.

---

### RedshiftserverlessNamespaceTags <a name="RedshiftserverlessNamespaceTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

&redshiftserverlessnamespace.RedshiftserverlessNamespaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessNamespaceNamespaceOutputReference <a name="RedshiftserverlessNamespaceNamespaceOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespaceNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftserverlessNamespaceNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn">AdminPasswordSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn">NamespaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordSecretArn`<sup>Required</sup> <a name="AdminPasswordSecretArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn"></a>

```go
func AdminPasswordSecretArn() *string
```

- *Type:* *string

---

##### `AdminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId"></a>

```go
func AdminPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceArn`<sup>Required</sup> <a name="NamespaceArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn"></a>

```go
func NamespaceArn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftserverlessNamespaceNamespace
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a>

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsList <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespaceSnapshotCopyConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessNamespaceSnapshotCopyConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get"></a>

```go
func Get(index *f64) RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId">ResetDestinationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod">ResetSnapshotRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationKmsKeyId` <a name="ResetDestinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId"></a>

```go
func ResetDestinationKmsKeyId()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion"></a>

```go
func ResetDestinationRegion()
```

##### `ResetSnapshotRetentionPeriod` <a name="ResetSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod"></a>

```go
func ResetSnapshotRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput">DestinationKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput">SnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId">DestinationKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod">SnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationKmsKeyIdInput`<sup>Optional</sup> <a name="DestinationKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput"></a>

```go
func DestinationKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput"></a>

```go
func DestinationRegionInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput"></a>

```go
func SnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `DestinationKmsKeyId`<sup>Required</sup> <a name="DestinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId"></a>

```go
func DestinationKmsKeyId() *string
```

- *Type:* *string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion"></a>

```go
func DestinationRegion() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriod`<sup>Required</sup> <a name="SnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod"></a>

```go
func SnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessNamespaceTagsList <a name="RedshiftserverlessNamespaceTagsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get"></a>

```go
func Get(index *f64) RedshiftserverlessNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftserverlessNamespaceTagsOutputReference <a name="RedshiftserverlessNamespaceTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshiftserverlessnamespace"

redshiftserverlessnamespace.NewRedshiftserverlessNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



