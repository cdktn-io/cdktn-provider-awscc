# `dataAwsccBackupRestoreTestingSelection` Submodule <a name="`dataAwsccBackupRestoreTestingSelection` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupRestoreTestingSelection <a name="DataAwsccBackupRestoreTestingSelection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_selection awscc_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelection(scope Construct, id *string, config DataAwsccBackupRestoreTestingSelectionConfig) DataAwsccBackupRestoreTestingSelection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig">DataAwsccBackupRestoreTestingSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig">DataAwsccBackupRestoreTestingSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupRestoreTestingSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceArns">ProtectedResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceConditions">ProtectedResourceConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceType">ProtectedResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreMetadataOverrides">RestoreMetadataOverrides</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingSelectionName">RestoreTestingSelectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.validationWindowHours">ValidationWindowHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `ProtectedResourceArns`<sup>Required</sup> <a name="ProtectedResourceArns" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceArns"></a>

```go
func ProtectedResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ProtectedResourceConditions`<sup>Required</sup> <a name="ProtectedResourceConditions" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```go
func ProtectedResourceConditions() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a>

---

##### `ProtectedResourceType`<sup>Required</sup> <a name="ProtectedResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceType"></a>

```go
func ProtectedResourceType() *string
```

- *Type:* *string

---

##### `RestoreMetadataOverrides`<sup>Required</sup> <a name="RestoreMetadataOverrides" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```go
func RestoreMetadataOverrides() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```go
func RestoreTestingPlanName() *string
```

- *Type:* *string

---

##### `RestoreTestingSelectionName`<sup>Required</sup> <a name="RestoreTestingSelectionName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingSelectionName"></a>

```go
func RestoreTestingSelectionName() *string
```

- *Type:* *string

---

##### `ValidationWindowHours`<sup>Required</sup> <a name="ValidationWindowHours" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.validationWindowHours"></a>

```go
func ValidationWindowHours() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupRestoreTestingSelectionConfig <a name="DataAwsccBackupRestoreTestingSelectionConfig" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

&dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_selection#id DataAwsccBackupRestoreTestingSelection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

&dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions {

}
```


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

&dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {

}
```


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

&dataawsccbackuprestoretestingselection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">StringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">StringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringEquals`<sup>Required</sup> <a name="StringEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```go
func StringEquals() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `StringNotEquals`<sup>Required</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```go
func StringNotEquals() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions</a>

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingselection"

dataawsccbackuprestoretestingselection.NewDataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>

---



