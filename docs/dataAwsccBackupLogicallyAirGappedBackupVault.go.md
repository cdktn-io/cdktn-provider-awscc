# `dataAwsccBackupLogicallyAirGappedBackupVault` Submodule <a name="`dataAwsccBackupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVault <a name="DataAwsccBackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.NewDataAwsccBackupLogicallyAirGappedBackupVault(scope Construct, id *string, config DataAwsccBackupLogicallyAirGappedBackupVaultConfig) DataAwsccBackupLogicallyAirGappedBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig">DataAwsccBackupLogicallyAirGappedBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig">DataAwsccBackupLogicallyAirGappedBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVault_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupLogicallyAirGappedBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy">AccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn">BackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName">BackupVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags">BackupVaultTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays">MinRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">MpaApprovalTeamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState">VaultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType">VaultType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessPolicy`<sup>Required</sup> <a name="AccessPolicy" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```go
func AccessPolicy() *string
```

- *Type:* *string

---

##### `BackupVaultArn`<sup>Required</sup> <a name="BackupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```go
func BackupVaultArn() *string
```

- *Type:* *string

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```go
func BackupVaultName() *string
```

- *Type:* *string

---

##### `BackupVaultTags`<sup>Required</sup> <a name="BackupVaultTags" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```go
func BackupVaultTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```go
func EncryptionKeyArn() *string
```

- *Type:* *string

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```go
func MaxRetentionDays() *f64
```

- *Type:* *f64

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```go
func MinRetentionDays() *f64
```

- *Type:* *f64

---

##### `MpaApprovalTeamArn`<sup>Required</sup> <a name="MpaApprovalTeamArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```go
func MpaApprovalTeamArn() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications"></a>

```go
func Notifications() DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `VaultState`<sup>Required</sup> <a name="VaultState" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```go
func VaultState() *string
```

- *Type:* *string

---

##### `VaultType`<sup>Required</sup> <a name="VaultType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```go
func VaultType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultConfig <a name="DataAwsccBackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

&dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_logically_air_gapped_backup_vault#id DataAwsccBackupLogicallyAirGappedBackupVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupLogicallyAirGappedBackupVaultNotifications <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

&dataawsccbackuplogicallyairgappedbackupvault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplogicallyairgappedbackupvault"

dataawsccbackuplogicallyairgappedbackupvault.NewDataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">BackupVaultEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupVaultEvents`<sup>Required</sup> <a name="BackupVaultEvents" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```go
func BackupVaultEvents() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupLogicallyAirGappedBackupVaultNotifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a>

---



