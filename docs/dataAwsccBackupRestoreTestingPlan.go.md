# `dataAwsccBackupRestoreTestingPlan` Submodule <a name="`dataAwsccBackupRestoreTestingPlan` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupRestoreTestingPlan <a name="DataAwsccBackupRestoreTestingPlan" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_plan awscc_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.NewDataAwsccBackupRestoreTestingPlan(scope Construct, id *string, config DataAwsccBackupRestoreTestingPlanConfig) DataAwsccBackupRestoreTestingPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig">DataAwsccBackupRestoreTestingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig">DataAwsccBackupRestoreTestingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupRestoreTestingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupRestoreTestingPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupRestoreTestingPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference">DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.restoreTestingPlanArn">RestoreTestingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.restoreTestingPlanName">RestoreTestingPlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.startWindowHours">StartWindowHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList">DataAwsccBackupRestoreTestingPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```go
func RecoveryPointSelection() DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference">DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference</a>

---

##### `RestoreTestingPlanArn`<sup>Required</sup> <a name="RestoreTestingPlanArn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.restoreTestingPlanArn"></a>

```go
func RestoreTestingPlanArn() *string
```

- *Type:* *string

---

##### `RestoreTestingPlanName`<sup>Required</sup> <a name="RestoreTestingPlanName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.restoreTestingPlanName"></a>

```go
func RestoreTestingPlanName() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindowHours`<sup>Required</sup> <a name="StartWindowHours" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.startWindowHours"></a>

```go
func StartWindowHours() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.tags"></a>

```go
func Tags() DataAwsccBackupRestoreTestingPlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList">DataAwsccBackupRestoreTestingPlanTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupRestoreTestingPlanConfig <a name="DataAwsccBackupRestoreTestingPlanConfig" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

&dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlanConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_restore_testing_plan#id DataAwsccBackupRestoreTestingPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupRestoreTestingPlanRecoveryPointSelection <a name="DataAwsccBackupRestoreTestingPlanRecoveryPointSelection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

&dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelection {

}
```


### DataAwsccBackupRestoreTestingPlanTags <a name="DataAwsccBackupRestoreTestingPlanTags" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

&dataawsccbackuprestoretestingplan.DataAwsccBackupRestoreTestingPlanTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.NewDataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">ExcludeVaults</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">IncludeVaults</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">RecoveryPointTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">SelectionWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelection">DataAwsccBackupRestoreTestingPlanRecoveryPointSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ExcludeVaults`<sup>Required</sup> <a name="ExcludeVaults" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```go
func ExcludeVaults() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeVaults`<sup>Required</sup> <a name="IncludeVaults" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```go
func IncludeVaults() *[]*string
```

- *Type:* *[]*string

---

##### `RecoveryPointTypes`<sup>Required</sup> <a name="RecoveryPointTypes" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```go
func RecoveryPointTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SelectionWindowDays`<sup>Required</sup> <a name="SelectionWindowDays" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```go
func SelectionWindowDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupRestoreTestingPlanRecoveryPointSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanRecoveryPointSelection">DataAwsccBackupRestoreTestingPlanRecoveryPointSelection</a>

---


### DataAwsccBackupRestoreTestingPlanTagsList <a name="DataAwsccBackupRestoreTestingPlanTagsList" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.NewDataAwsccBackupRestoreTestingPlanTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupRestoreTestingPlanTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupRestoreTestingPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupRestoreTestingPlanTagsOutputReference <a name="DataAwsccBackupRestoreTestingPlanTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuprestoretestingplan"

dataawsccbackuprestoretestingplan.NewDataAwsccBackupRestoreTestingPlanTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupRestoreTestingPlanTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTags">DataAwsccBackupRestoreTestingPlanTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupRestoreTestingPlanTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingPlan.DataAwsccBackupRestoreTestingPlanTags">DataAwsccBackupRestoreTestingPlanTags</a>

---



