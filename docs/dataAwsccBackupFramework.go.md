# `dataAwsccBackupFramework` Submodule <a name="`dataAwsccBackupFramework` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupFramework <a name="DataAwsccBackupFramework" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework awscc_backup_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFramework(scope Construct, id *string, config DataAwsccBackupFrameworkConfig) DataAwsccBackupFramework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig">DataAwsccBackupFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig">DataAwsccBackupFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupFramework resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.DataAwsccBackupFramework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.DataAwsccBackupFramework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.DataAwsccBackupFramework_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.DataAwsccBackupFramework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.deploymentStatus">DeploymentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkArn">FrameworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkControls">FrameworkControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList">DataAwsccBackupFrameworkFrameworkControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkDescription">FrameworkDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkName">FrameworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkStatus">FrameworkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkTags">FrameworkTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList">DataAwsccBackupFrameworkFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.deploymentStatus"></a>

```go
func DeploymentStatus() *string
```

- *Type:* *string

---

##### `FrameworkArn`<sup>Required</sup> <a name="FrameworkArn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkArn"></a>

```go
func FrameworkArn() *string
```

- *Type:* *string

---

##### `FrameworkControls`<sup>Required</sup> <a name="FrameworkControls" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkControls"></a>

```go
func FrameworkControls() DataAwsccBackupFrameworkFrameworkControlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList">DataAwsccBackupFrameworkFrameworkControlsList</a>

---

##### `FrameworkDescription`<sup>Required</sup> <a name="FrameworkDescription" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkDescription"></a>

```go
func FrameworkDescription() *string
```

- *Type:* *string

---

##### `FrameworkName`<sup>Required</sup> <a name="FrameworkName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkName"></a>

```go
func FrameworkName() *string
```

- *Type:* *string

---

##### `FrameworkStatus`<sup>Required</sup> <a name="FrameworkStatus" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkStatus"></a>

```go
func FrameworkStatus() *string
```

- *Type:* *string

---

##### `FrameworkTags`<sup>Required</sup> <a name="FrameworkTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkTags"></a>

```go
func FrameworkTags() DataAwsccBackupFrameworkFrameworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList">DataAwsccBackupFrameworkFrameworkTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupFrameworkConfig <a name="DataAwsccBackupFrameworkConfig" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework#id DataAwsccBackupFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupFrameworkFrameworkControls <a name="DataAwsccBackupFrameworkFrameworkControls" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkFrameworkControls {

}
```


### DataAwsccBackupFrameworkFrameworkControlsControlInputParameters <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParameters" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters {

}
```


### DataAwsccBackupFrameworkFrameworkControlsControlScope <a name="DataAwsccBackupFrameworkFrameworkControlsControlScope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkFrameworkControlsControlScope {

}
```


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTags <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags {

}
```


### DataAwsccBackupFrameworkFrameworkTags <a name="DataAwsccBackupFrameworkFrameworkTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

&dataawsccbackupframework.DataAwsccBackupFrameworkFrameworkTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsControlInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get"></a>

```go
func Get(index *f64) DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters">DataAwsccBackupFrameworkFrameworkControlsControlInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupFrameworkFrameworkControlsControlInputParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters">DataAwsccBackupFrameworkFrameworkControlsControlInputParameters</a>

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds">ComplianceResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList">DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope">DataAwsccBackupFrameworkFrameworkControlsControlScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceResourceIds`<sup>Required</sup> <a name="ComplianceResourceIds" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds"></a>

```go
func ComplianceResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes"></a>

```go
func ComplianceResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags"></a>

```go
func Tags() DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList">DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupFrameworkFrameworkControlsControlScope
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope">DataAwsccBackupFrameworkFrameworkControlsControlScope</a>

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags">DataAwsccBackupFrameworkFrameworkControlsControlScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupFrameworkFrameworkControlsControlScopeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags">DataAwsccBackupFrameworkFrameworkControlsControlScopeTags</a>

---


### DataAwsccBackupFrameworkFrameworkControlsList <a name="DataAwsccBackupFrameworkFrameworkControlsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupFrameworkFrameworkControlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupFrameworkFrameworkControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupFrameworkFrameworkControlsOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupFrameworkFrameworkControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters">ControlInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList">DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlName">ControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlScope">ControlScope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference">DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls">DataAwsccBackupFrameworkFrameworkControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlInputParameters`<sup>Required</sup> <a name="ControlInputParameters" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters"></a>

```go
func ControlInputParameters() DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList">DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList</a>

---

##### `ControlName`<sup>Required</sup> <a name="ControlName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlName"></a>

```go
func ControlName() *string
```

- *Type:* *string

---

##### `ControlScope`<sup>Required</sup> <a name="ControlScope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlScope"></a>

```go
func ControlScope() DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference">DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupFrameworkFrameworkControls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls">DataAwsccBackupFrameworkFrameworkControls</a>

---


### DataAwsccBackupFrameworkFrameworkTagsList <a name="DataAwsccBackupFrameworkFrameworkTagsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupFrameworkFrameworkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupFrameworkFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupFrameworkFrameworkTagsOutputReference <a name="DataAwsccBackupFrameworkFrameworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupframework"

dataawsccbackupframework.NewDataAwsccBackupFrameworkFrameworkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupFrameworkFrameworkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags">DataAwsccBackupFrameworkFrameworkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupFrameworkFrameworkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags">DataAwsccBackupFrameworkFrameworkTags</a>

---



