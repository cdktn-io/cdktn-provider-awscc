# `dataAwsccOpsworkscmServer` Submodule <a name="`dataAwsccOpsworkscmServer` Submodule" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpsworkscmServer <a name="DataAwsccOpsworkscmServer" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opsworkscm_server awscc_opsworkscm_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.NewDataAwsccOpsworkscmServer(scope Construct, id *string, config DataAwsccOpsworkscmServerConfig) DataAwsccOpsworkscmServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig">DataAwsccOpsworkscmServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig">DataAwsccOpsworkscmServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpsworkscmServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.DataAwsccOpsworkscmServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.DataAwsccOpsworkscmServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.DataAwsccOpsworkscmServer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.DataAwsccOpsworkscmServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOpsworkscmServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOpsworkscmServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOpsworkscmServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opsworkscm_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpsworkscmServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.backupRetentionCount">BackupRetentionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customCertificate">CustomCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customDomain">CustomDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customPrivateKey">CustomPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.disableAutomatedBackup">DisableAutomatedBackup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineAttributes">EngineAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList">DataAwsccOpsworkscmServerEngineAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineModel">EngineModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList">DataAwsccOpsworkscmServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `BackupRetentionCount`<sup>Required</sup> <a name="BackupRetentionCount" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.backupRetentionCount"></a>

```go
func BackupRetentionCount() *f64
```

- *Type:* *f64

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customCertificate"></a>

```go
func CustomCertificate() *string
```

- *Type:* *string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customDomain"></a>

```go
func CustomDomain() *string
```

- *Type:* *string

---

##### `CustomPrivateKey`<sup>Required</sup> <a name="CustomPrivateKey" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.customPrivateKey"></a>

```go
func CustomPrivateKey() *string
```

- *Type:* *string

---

##### `DisableAutomatedBackup`<sup>Required</sup> <a name="DisableAutomatedBackup" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.disableAutomatedBackup"></a>

```go
func DisableAutomatedBackup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineAttributes`<sup>Required</sup> <a name="EngineAttributes" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineAttributes"></a>

```go
func EngineAttributes() DataAwsccOpsworkscmServerEngineAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList">DataAwsccOpsworkscmServerEngineAttributesList</a>

---

##### `EngineModel`<sup>Required</sup> <a name="EngineModel" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineModel"></a>

```go
func EngineModel() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.tags"></a>

```go
func Tags() DataAwsccOpsworkscmServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList">DataAwsccOpsworkscmServerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpsworkscmServerConfig <a name="DataAwsccOpsworkscmServerConfig" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

&dataawsccopsworkscmserver.DataAwsccOpsworkscmServerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opsworkscm_server#id DataAwsccOpsworkscmServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpsworkscmServerEngineAttributes <a name="DataAwsccOpsworkscmServerEngineAttributes" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

&dataawsccopsworkscmserver.DataAwsccOpsworkscmServerEngineAttributes {

}
```


### DataAwsccOpsworkscmServerTags <a name="DataAwsccOpsworkscmServerTags" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

&dataawsccopsworkscmserver.DataAwsccOpsworkscmServerTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpsworkscmServerEngineAttributesList <a name="DataAwsccOpsworkscmServerEngineAttributesList" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.NewDataAwsccOpsworkscmServerEngineAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpsworkscmServerEngineAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccOpsworkscmServerEngineAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpsworkscmServerEngineAttributesOutputReference <a name="DataAwsccOpsworkscmServerEngineAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.NewDataAwsccOpsworkscmServerEngineAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpsworkscmServerEngineAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributes">DataAwsccOpsworkscmServerEngineAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpsworkscmServerEngineAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerEngineAttributes">DataAwsccOpsworkscmServerEngineAttributes</a>

---


### DataAwsccOpsworkscmServerTagsList <a name="DataAwsccOpsworkscmServerTagsList" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.NewDataAwsccOpsworkscmServerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpsworkscmServerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOpsworkscmServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpsworkscmServerTagsOutputReference <a name="DataAwsccOpsworkscmServerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopsworkscmserver"

dataawsccopsworkscmserver.NewDataAwsccOpsworkscmServerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpsworkscmServerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTags">DataAwsccOpsworkscmServerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpsworkscmServerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpsworkscmServer.DataAwsccOpsworkscmServerTags">DataAwsccOpsworkscmServerTags</a>

---



