# `dataAwsccLightsailDatabaseSnapshot` Submodule <a name="`dataAwsccLightsailDatabaseSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailDatabaseSnapshot <a name="DataAwsccLightsailDatabaseSnapshot" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_database_snapshot awscc_lightsail_database_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.NewDataAwsccLightsailDatabaseSnapshot(scope Construct, id *string, config DataAwsccLightsailDatabaseSnapshotConfig) DataAwsccLightsailDatabaseSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig">DataAwsccLightsailDatabaseSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig">DataAwsccLightsailDatabaseSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLightsailDatabaseSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLightsailDatabaseSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLightsailDatabaseSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_database_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailDatabaseSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseArn">FromRelationalDatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId">FromRelationalDatabaseBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId">FromRelationalDatabaseBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseName">FromRelationalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference">DataAwsccLightsailDatabaseSnapshotLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName">RelationalDatabaseSnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.sizeInGb">SizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.supportCode">SupportCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList">DataAwsccLightsailDatabaseSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FromRelationalDatabaseArn`<sup>Required</sup> <a name="FromRelationalDatabaseArn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseArn"></a>

```go
func FromRelationalDatabaseArn() *string
```

- *Type:* *string

---

##### `FromRelationalDatabaseBlueprintId`<sup>Required</sup> <a name="FromRelationalDatabaseBlueprintId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBlueprintId"></a>

```go
func FromRelationalDatabaseBlueprintId() *string
```

- *Type:* *string

---

##### `FromRelationalDatabaseBundleId`<sup>Required</sup> <a name="FromRelationalDatabaseBundleId" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseBundleId"></a>

```go
func FromRelationalDatabaseBundleId() *string
```

- *Type:* *string

---

##### `FromRelationalDatabaseName`<sup>Required</sup> <a name="FromRelationalDatabaseName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.fromRelationalDatabaseName"></a>

```go
func FromRelationalDatabaseName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.location"></a>

```go
func Location() DataAwsccLightsailDatabaseSnapshotLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference">DataAwsccLightsailDatabaseSnapshotLocationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseName"></a>

```go
func RelationalDatabaseName() *string
```

- *Type:* *string

---

##### `RelationalDatabaseSnapshotName`<sup>Required</sup> <a name="RelationalDatabaseSnapshotName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.relationalDatabaseSnapshotName"></a>

```go
func RelationalDatabaseSnapshotName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SizeInGb`<sup>Required</sup> <a name="SizeInGb" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.sizeInGb"></a>

```go
func SizeInGb() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.supportCode"></a>

```go
func SupportCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tags"></a>

```go
func Tags() DataAwsccLightsailDatabaseSnapshotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList">DataAwsccLightsailDatabaseSnapshotTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailDatabaseSnapshotConfig <a name="DataAwsccLightsailDatabaseSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

&dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lightsail_database_snapshot#id DataAwsccLightsailDatabaseSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailDatabaseSnapshotLocation <a name="DataAwsccLightsailDatabaseSnapshotLocation" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

&dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshotLocation {

}
```


### DataAwsccLightsailDatabaseSnapshotTags <a name="DataAwsccLightsailDatabaseSnapshotTags" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

&dataawscclightsaildatabasesnapshot.DataAwsccLightsailDatabaseSnapshotTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailDatabaseSnapshotLocationOutputReference <a name="DataAwsccLightsailDatabaseSnapshotLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.NewDataAwsccLightsailDatabaseSnapshotLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailDatabaseSnapshotLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation">DataAwsccLightsailDatabaseSnapshotLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailDatabaseSnapshotLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotLocation">DataAwsccLightsailDatabaseSnapshotLocation</a>

---


### DataAwsccLightsailDatabaseSnapshotTagsList <a name="DataAwsccLightsailDatabaseSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.NewDataAwsccLightsailDatabaseSnapshotTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailDatabaseSnapshotTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailDatabaseSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailDatabaseSnapshotTagsOutputReference <a name="DataAwsccLightsailDatabaseSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsaildatabasesnapshot"

dataawscclightsaildatabasesnapshot.NewDataAwsccLightsailDatabaseSnapshotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailDatabaseSnapshotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags">DataAwsccLightsailDatabaseSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailDatabaseSnapshotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDatabaseSnapshot.DataAwsccLightsailDatabaseSnapshotTags">DataAwsccLightsailDatabaseSnapshotTags</a>

---



