# `dataAwsccRedshiftSnapshot` Submodule <a name="`dataAwsccRedshiftSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftSnapshot <a name="DataAwsccRedshiftSnapshot" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/redshift_snapshot awscc_redshift_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.NewDataAwsccRedshiftSnapshot(scope Construct, id *string, config DataAwsccRedshiftSnapshotConfig) DataAwsccRedshiftSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig">DataAwsccRedshiftSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig">DataAwsccRedshiftSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRedshiftSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRedshiftSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRedshiftSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/redshift_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterCreateTime">ClusterCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.encryptedWithHsm">EncryptedWithHsm</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.engineFullVersion">EngineFullVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotCreateTime">SnapshotCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList">DataAwsccRedshiftSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `ClusterCreateTime`<sup>Required</sup> <a name="ClusterCreateTime" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterCreateTime"></a>

```go
func ClusterCreateTime() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncryptedWithHsm`<sup>Required</sup> <a name="EncryptedWithHsm" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.encryptedWithHsm"></a>

```go
func EncryptedWithHsm() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EngineFullVersion`<sup>Required</sup> <a name="EngineFullVersion" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.engineFullVersion"></a>

```go
func EngineFullVersion() *string
```

- *Type:* *string

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaintenanceTrackName`<sup>Required</sup> <a name="MaintenanceTrackName" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.maintenanceTrackName"></a>

```go
func MaintenanceTrackName() *string
```

- *Type:* *string

---

##### `ManualSnapshotRetentionPeriod`<sup>Required</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.manualSnapshotRetentionPeriod"></a>

```go
func ManualSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `SnapshotCreateTime`<sup>Required</sup> <a name="SnapshotCreateTime" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotCreateTime"></a>

```go
func SnapshotCreateTime() *string
```

- *Type:* *string

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.tags"></a>

```go
func Tags() DataAwsccRedshiftSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList">DataAwsccRedshiftSnapshotTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftSnapshotConfig <a name="DataAwsccRedshiftSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

&dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/redshift_snapshot#id DataAwsccRedshiftSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftSnapshotTags <a name="DataAwsccRedshiftSnapshotTags" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

&dataawsccredshiftsnapshot.DataAwsccRedshiftSnapshotTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftSnapshotTagsList <a name="DataAwsccRedshiftSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.NewDataAwsccRedshiftSnapshotTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftSnapshotTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftSnapshotTagsOutputReference <a name="DataAwsccRedshiftSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftsnapshot"

dataawsccredshiftsnapshot.NewDataAwsccRedshiftSnapshotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftSnapshotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTags">DataAwsccRedshiftSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftSnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftSnapshot.DataAwsccRedshiftSnapshotTags">DataAwsccRedshiftSnapshotTags</a>

---



