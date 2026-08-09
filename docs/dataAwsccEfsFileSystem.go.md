# `dataAwsccEfsFileSystem` Submodule <a name="`dataAwsccEfsFileSystem` Submodule" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEfsFileSystem <a name="DataAwsccEfsFileSystem" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystem(scope Construct, id *string, config DataAwsccEfsFileSystemConfig) DataAwsccEfsFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig">DataAwsccEfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig">DataAwsccEfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.DataAwsccEfsFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.DataAwsccEfsFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.DataAwsccEfsFileSystem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.DataAwsccEfsFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEfsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference">DataAwsccEfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemPolicy">FileSystemPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemProtection">FileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference">DataAwsccEfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemTags">FileSystemTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList">DataAwsccEfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.lifecyclePolicies">LifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList">DataAwsccEfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.performanceMode">PerformanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.provisionedThroughputInMibps">ProvisionedThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference">DataAwsccEfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.backupPolicy"></a>

```go
func BackupPolicy() DataAwsccEfsFileSystemBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference">DataAwsccEfsFileSystemBackupPolicyOutputReference</a>

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```go
func BypassPolicyLockoutSafetyCheck() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemPolicy`<sup>Required</sup> <a name="FileSystemPolicy" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemPolicy"></a>

```go
func FileSystemPolicy() *string
```

- *Type:* *string

---

##### `FileSystemProtection`<sup>Required</sup> <a name="FileSystemProtection" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemProtection"></a>

```go
func FileSystemProtection() DataAwsccEfsFileSystemFileSystemProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference">DataAwsccEfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `FileSystemTags`<sup>Required</sup> <a name="FileSystemTags" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.fileSystemTags"></a>

```go
func FileSystemTags() DataAwsccEfsFileSystemFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList">DataAwsccEfsFileSystemFileSystemTagsList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LifecyclePolicies`<sup>Required</sup> <a name="LifecyclePolicies" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.lifecyclePolicies"></a>

```go
func LifecyclePolicies() DataAwsccEfsFileSystemLifecyclePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList">DataAwsccEfsFileSystemLifecyclePoliciesList</a>

---

##### `PerformanceMode`<sup>Required</sup> <a name="PerformanceMode" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.performanceMode"></a>

```go
func PerformanceMode() *string
```

- *Type:* *string

---

##### `ProvisionedThroughputInMibps`<sup>Required</sup> <a name="ProvisionedThroughputInMibps" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.provisionedThroughputInMibps"></a>

```go
func ProvisionedThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.replicationConfiguration"></a>

```go
func ReplicationConfiguration() DataAwsccEfsFileSystemReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference">DataAwsccEfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.throughputMode"></a>

```go
func ThroughputMode() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEfsFileSystemBackupPolicy <a name="DataAwsccEfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemBackupPolicy {

}
```


### DataAwsccEfsFileSystemConfig <a name="DataAwsccEfsFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/efs_file_system#id DataAwsccEfsFileSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEfsFileSystemFileSystemProtection <a name="DataAwsccEfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemFileSystemProtection {

}
```


### DataAwsccEfsFileSystemFileSystemTags <a name="DataAwsccEfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemFileSystemTags {

}
```


### DataAwsccEfsFileSystemLifecyclePolicies <a name="DataAwsccEfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemLifecyclePolicies {

}
```


### DataAwsccEfsFileSystemReplicationConfiguration <a name="DataAwsccEfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemReplicationConfiguration {

}
```


### DataAwsccEfsFileSystemReplicationConfigurationDestinations <a name="DataAwsccEfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

&dataawsccefsfilesystem.DataAwsccEfsFileSystemReplicationConfigurationDestinations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEfsFileSystemBackupPolicyOutputReference <a name="DataAwsccEfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEfsFileSystemBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicy">DataAwsccEfsFileSystemBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemBackupPolicy">DataAwsccEfsFileSystemBackupPolicy</a>

---


### DataAwsccEfsFileSystemFileSystemProtectionOutputReference <a name="DataAwsccEfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemFileSystemProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEfsFileSystemFileSystemProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">ReplicationOverwriteProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtection">DataAwsccEfsFileSystemFileSystemProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationOverwriteProtection`<sup>Required</sup> <a name="ReplicationOverwriteProtection" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```go
func ReplicationOverwriteProtection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemFileSystemProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemProtection">DataAwsccEfsFileSystemFileSystemProtection</a>

---


### DataAwsccEfsFileSystemFileSystemTagsList <a name="DataAwsccEfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemFileSystemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEfsFileSystemFileSystemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEfsFileSystemFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEfsFileSystemFileSystemTagsOutputReference <a name="DataAwsccEfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemFileSystemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEfsFileSystemFileSystemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTags">DataAwsccEfsFileSystemFileSystemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemFileSystemTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemFileSystemTags">DataAwsccEfsFileSystemFileSystemTags</a>

---


### DataAwsccEfsFileSystemLifecyclePoliciesList <a name="DataAwsccEfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemLifecyclePoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEfsFileSystemLifecyclePoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.get"></a>

```go
func Get(index *f64) DataAwsccEfsFileSystemLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEfsFileSystemLifecyclePoliciesOutputReference <a name="DataAwsccEfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemLifecyclePoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEfsFileSystemLifecyclePoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">TransitionToArchive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">TransitionToIa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">TransitionToPrimaryStorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePolicies">DataAwsccEfsFileSystemLifecyclePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransitionToArchive`<sup>Required</sup> <a name="TransitionToArchive" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```go
func TransitionToArchive() *string
```

- *Type:* *string

---

##### `TransitionToIa`<sup>Required</sup> <a name="TransitionToIa" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```go
func TransitionToIa() *string
```

- *Type:* *string

---

##### `TransitionToPrimaryStorageClass`<sup>Required</sup> <a name="TransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```go
func TransitionToPrimaryStorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemLifecyclePolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemLifecyclePolicies">DataAwsccEfsFileSystemLifecyclePolicies</a>

---


### DataAwsccEfsFileSystemReplicationConfigurationDestinationsList <a name="DataAwsccEfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemReplicationConfigurationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEfsFileSystemReplicationConfigurationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinations">DataAwsccEfsFileSystemReplicationConfigurationDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemReplicationConfigurationDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinations">DataAwsccEfsFileSystemReplicationConfigurationDestinations</a>

---


### DataAwsccEfsFileSystemReplicationConfigurationOutputReference <a name="DataAwsccEfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccefsfilesystem"

dataawsccefsfilesystem.NewDataAwsccEfsFileSystemReplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEfsFileSystemReplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList">DataAwsccEfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfiguration">DataAwsccEfsFileSystemReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccEfsFileSystemReplicationConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationDestinationsList">DataAwsccEfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEfsFileSystemReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEfsFileSystem.DataAwsccEfsFileSystemReplicationConfiguration">DataAwsccEfsFileSystemReplicationConfiguration</a>

---



