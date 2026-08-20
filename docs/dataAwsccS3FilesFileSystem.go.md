# `dataAwsccS3FilesFileSystem` Submodule <a name="`dataAwsccS3FilesFileSystem` Submodule" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3FilesFileSystem <a name="DataAwsccS3FilesFileSystem" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3files_file_system awscc_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystem(scope Construct, id *string, config DataAwsccS3FilesFileSystemConfig) DataAwsccS3FilesFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig">DataAwsccS3FilesFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig">DataAwsccS3FilesFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3FilesFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.acceptBucketWarning">AcceptBucketWarning</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fileSystemArn">FileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.synchronizationConfiguration">SynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference">DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList">DataAwsccS3FilesFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcceptBucketWarning`<sup>Required</sup> <a name="AcceptBucketWarning" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.acceptBucketWarning"></a>

```go
func AcceptBucketWarning() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fileSystemArn"></a>

```go
func FileSystemArn() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `SynchronizationConfiguration`<sup>Required</sup> <a name="SynchronizationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.synchronizationConfiguration"></a>

```go
func SynchronizationConfiguration() DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference">DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.tags"></a>

```go
func Tags() DataAwsccS3FilesFileSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList">DataAwsccS3FilesFileSystemTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3FilesFileSystemConfig <a name="DataAwsccS3FilesFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

&dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystemConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/s3files_file_system#id DataAwsccS3FilesFileSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3FilesFileSystemSynchronizationConfiguration <a name="DataAwsccS3FilesFileSystemSynchronizationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

&dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystemSynchronizationConfiguration {

}
```


### DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

&dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules {

}
```


### DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

&dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules {

}
```


### DataAwsccS3FilesFileSystemTags <a name="DataAwsccS3FilesFileSystemTags" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

&dataawsccs3filesfilesystem.DataAwsccS3FilesFileSystemTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get"></a>

```go
func Get(index *f64) DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules">DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess"></a>

```go
func DaysAfterLastAccess() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules">DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>

---


### DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get"></a>

```go
func Get(index *f64) DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan">SizeLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules">DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan"></a>

```go
func SizeLessThan() *f64
```

- *Type:* *f64

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules">DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRules</a>

---


### DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference <a name="DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules">ExpirationDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules">ImportDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList">DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfiguration">DataAwsccS3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationDataRules`<sup>Required</sup> <a name="ExpirationDataRules" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules"></a>

```go
func ExpirationDataRules() DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">DataAwsccS3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a>

---

##### `ImportDataRules`<sup>Required</sup> <a name="ImportDataRules" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules"></a>

```go
func ImportDataRules() DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList">DataAwsccS3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a>

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber"></a>

```go
func LatestVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3FilesFileSystemSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemSynchronizationConfiguration">DataAwsccS3FilesFileSystemSynchronizationConfiguration</a>

---


### DataAwsccS3FilesFileSystemTagsList <a name="DataAwsccS3FilesFileSystemTagsList" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3FilesFileSystemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3FilesFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3FilesFileSystemTagsOutputReference <a name="DataAwsccS3FilesFileSystemTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3filesfilesystem"

dataawsccs3filesfilesystem.NewDataAwsccS3FilesFileSystemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3FilesFileSystemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTags">DataAwsccS3FilesFileSystemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3FilesFileSystemTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3FilesFileSystem.DataAwsccS3FilesFileSystemTags">DataAwsccS3FilesFileSystemTags</a>

---



