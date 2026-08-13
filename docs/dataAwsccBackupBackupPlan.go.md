# `dataAwsccBackupBackupPlan` Submodule <a name="`dataAwsccBackupBackupPlan` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupBackupPlan <a name="DataAwsccBackupBackupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlan(scope Construct, id *string, config DataAwsccBackupBackupPlanConfig) DataAwsccBackupBackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig">DataAwsccBackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig">DataAwsccBackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.DataAwsccBackupBackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.DataAwsccBackupBackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.DataAwsccBackupBackupPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.DataAwsccBackupBackupPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlan">BackupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference">DataAwsccBackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanArn">BackupPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanTags">BackupPlanTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlan"></a>

```go
func BackupPlan() DataAwsccBackupBackupPlanBackupPlanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference">DataAwsccBackupBackupPlanBackupPlanOutputReference</a>

---

##### `BackupPlanArn`<sup>Required</sup> <a name="BackupPlanArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanArn"></a>

```go
func BackupPlanArn() *string
```

- *Type:* *string

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanId"></a>

```go
func BackupPlanId() *string
```

- *Type:* *string

---

##### `BackupPlanTags`<sup>Required</sup> <a name="BackupPlanTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanTags"></a>

```go
func BackupPlanTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupBackupPlanBackupPlan <a name="DataAwsccBackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlan {

}
```


### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRule <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle {

}
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions {

}
```


### DataAwsccBackupBackupPlanBackupPlanScanSettings <a name="DataAwsccBackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanBackupPlanScanSettings {

}
```


### DataAwsccBackupBackupPlanConfig <a name="DataAwsccBackupBackupPlanConfig" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

&dataawsccbackupbackupplan.DataAwsccBackupBackupPlanConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_plan#id DataAwsccBackupBackupPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">BackupOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```go
func BackupOptions() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```go
func DeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```go
func MoveToColdStorageAfterDays() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">DestinationBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationBackupVaultArn`<sup>Required</sup> <a name="DestinationBackupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```go
func DestinationBackupVaultArn() *string
```

- *Type:* *string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```go
func Lifecycle() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```go
func DeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```go
func MoveToColdStorageAfterDays() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">CompletionWindowMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">CopyActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">IndexActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">ScanActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">StartWindowMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">TargetBackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule">DataAwsccBackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletionWindowMinutes`<sup>Required</sup> <a name="CompletionWindowMinutes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```go
func CompletionWindowMinutes() *f64
```

- *Type:* *f64

---

##### `CopyActions`<sup>Required</sup> <a name="CopyActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```go
func CopyActions() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```go
func EnableContinuousBackup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IndexActions`<sup>Required</sup> <a name="IndexActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```go
func IndexActions() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```go
func Lifecycle() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```go
func RecoveryPointTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `ScanActions`<sup>Required</sup> <a name="ScanActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```go
func ScanActions() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindowMinutes`<sup>Required</sup> <a name="StartWindowMinutes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```go
func StartWindowMinutes() *f64
```

- *Type:* *f64

---

##### `TargetBackupVault`<sup>Required</sup> <a name="TargetBackupVault" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```go
func TargetBackupVault() *string
```

- *Type:* *string

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
func TargetLogicallyAirGappedBackupVaultArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule">DataAwsccBackupBackupPlanBackupPlanBackupPlanRule</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupBackupPlanBackupPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">AdvancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanName">BackupPlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">BackupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.scanSettings">ScanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList">DataAwsccBackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan">DataAwsccBackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedBackupSettings`<sup>Required</sup> <a name="AdvancedBackupSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```go
func AdvancedBackupSettings() DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `BackupPlanName`<sup>Required</sup> <a name="BackupPlanName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```go
func BackupPlanName() *string
```

- *Type:* *string

---

##### `BackupPlanRule`<sup>Required</sup> <a name="BackupPlanRule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```go
func BackupPlanRule() DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `ScanSettings`<sup>Required</sup> <a name="ScanSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```go
func ScanSettings() DataAwsccBackupBackupPlanBackupPlanScanSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList">DataAwsccBackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan">DataAwsccBackupBackupPlanBackupPlan</a>

---


### DataAwsccBackupBackupPlanBackupPlanScanSettingsList <a name="DataAwsccBackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanScanSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupBackupPlanBackupPlanScanSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackupbackupplan"

dataawsccbackupbackupplan.NewDataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings">DataAwsccBackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```go
func ScannerRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupBackupPlanBackupPlanScanSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings">DataAwsccBackupBackupPlanBackupPlanScanSettings</a>

---



