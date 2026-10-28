# `dataAwsccTimestreamInfluxDbBackup` Submodule <a name="`dataAwsccTimestreamInfluxDbBackup` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamInfluxDbBackup <a name="DataAwsccTimestreamInfluxDbBackup" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup awscc_timestream_influx_db_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackup(scope Construct, id *string, config DataAwsccTimestreamInfluxDbBackupConfig) DataAwsccTimestreamInfluxDbBackup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTimestreamInfluxDbBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTimestreamInfluxDbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamInfluxDbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration">ClusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType">DbInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId">DbParameterGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId">DbResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType">DbStorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType">EngineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter">ExpiresAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId">InfluxDbBackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterConfiguration`<sup>Required</sup> <a name="ClusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration"></a>

```go
func ClusterConfiguration() DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType"></a>

```go
func DbInstanceType() *string
```

- *Type:* *string

---

##### `DbParameterGroupId`<sup>Required</sup> <a name="DbParameterGroupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId"></a>

```go
func DbParameterGroupId() *string
```

- *Type:* *string

---

##### `DbResourceId`<sup>Required</sup> <a name="DbResourceId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId"></a>

```go
func DbResourceId() *string
```

- *Type:* *string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType"></a>

```go
func DbStorageType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType"></a>

```go
func EngineType() *string
```

- *Type:* *string

---

##### `ExpiresAfter`<sup>Required</sup> <a name="ExpiresAfter" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter"></a>

```go
func ExpiresAfter() *string
```

- *Type:* *string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode"></a>

```go
func FailoverMode() *string
```

- *Type:* *string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn"></a>

```go
func InfluxAuthParametersSecretArn() *string
```

- *Type:* *string

---

##### `InfluxDbBackupId`<sup>Required</sup> <a name="InfluxDbBackupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId"></a>

```go
func InfluxDbBackupId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags"></a>

```go
func Tags() DataAwsccTimestreamInfluxDbBackupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds"></a>

```go
func VpcSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfiguration <a name="DataAwsccTimestreamInfluxDbBackupClusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration {

}
```


### DataAwsccTimestreamInfluxDbBackupConfig <a name="DataAwsccTimestreamInfluxDbBackupConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#id DataAwsccTimestreamInfluxDbBackup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration {

}
```


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration {

}
```


### DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule {

}
```


### DataAwsccTimestreamInfluxDbBackupTags <a name="DataAwsccTimestreamInfluxDbBackupTags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

&dataawscctimestreaminfluxdbbackup.DataAwsccTimestreamInfluxDbBackupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor">DedicatedCompactor</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances">IngestQueryInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances">QueryOnlyInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DedicatedCompactor`<sup>Required</sup> <a name="DedicatedCompactor" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor"></a>

```go
func DedicatedCompactor() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IngestQueryInstances`<sup>Required</sup> <a name="IngestQueryInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances"></a>

```go
func IngestQueryInstances() *f64
```

- *Type:* *f64

---

##### `QueryOnlyInstances`<sup>Required</sup> <a name="QueryOnlyInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances"></a>

```go
func QueryOnlyInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamInfluxDbBackupClusterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a>

---


### DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a>

---


### DataAwsccTimestreamInfluxDbBackupTagsList <a name="DataAwsccTimestreamInfluxDbBackupTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTimestreamInfluxDbBackupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccTimestreamInfluxDbBackupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTimestreamInfluxDbBackupTagsOutputReference <a name="DataAwsccTimestreamInfluxDbBackupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscctimestreaminfluxdbbackup"

dataawscctimestreaminfluxdbbackup.NewDataAwsccTimestreamInfluxDbBackupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTimestreamInfluxDbBackupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTimestreamInfluxDbBackupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a>

---



