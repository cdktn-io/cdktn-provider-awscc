# `dataAwsccApsWorkspace` Submodule <a name="`dataAwsccApsWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccApsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApsWorkspace <a name="DataAwsccApsWorkspace" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace awscc_aps_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspace(scope Construct, id *string, config DataAwsccApsWorkspaceConfig) DataAwsccApsWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig">DataAwsccApsWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig">DataAwsccApsWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApsWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.DataAwsccApsWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.DataAwsccApsWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.DataAwsccApsWorkspace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.DataAwsccApsWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApsWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApsWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alertManagerDefinition">AlertManagerDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference">DataAwsccApsWorkspaceLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.prometheusEndpoint">PrometheusEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.queryLoggingConfiguration">QueryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList">DataAwsccApsWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceConfiguration">WorkspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AlertManagerDefinition`<sup>Required</sup> <a name="AlertManagerDefinition" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alertManagerDefinition"></a>

```go
func AlertManagerDefinition() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() DataAwsccApsWorkspaceLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference">DataAwsccApsWorkspaceLoggingConfigurationOutputReference</a>

---

##### `PrometheusEndpoint`<sup>Required</sup> <a name="PrometheusEndpoint" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.prometheusEndpoint"></a>

```go
func PrometheusEndpoint() *string
```

- *Type:* *string

---

##### `QueryLoggingConfiguration`<sup>Required</sup> <a name="QueryLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.queryLoggingConfiguration"></a>

```go
func QueryLoggingConfiguration() DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tags"></a>

```go
func Tags() DataAwsccApsWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList">DataAwsccApsWorkspaceTagsList</a>

---

##### `WorkspaceConfiguration`<sup>Required</sup> <a name="WorkspaceConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceConfiguration"></a>

```go
func WorkspaceConfiguration() DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApsWorkspaceConfig <a name="DataAwsccApsWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aps_workspace#id DataAwsccApsWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApsWorkspaceLoggingConfiguration <a name="DataAwsccApsWorkspaceLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceLoggingConfiguration {

}
```


### DataAwsccApsWorkspaceQueryLoggingConfiguration <a name="DataAwsccApsWorkspaceQueryLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration {

}
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations {

}
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs {

}
```


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters {

}
```


### DataAwsccApsWorkspaceTags <a name="DataAwsccApsWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceTags {

}
```


### DataAwsccApsWorkspaceWorkspaceConfiguration <a name="DataAwsccApsWorkspaceWorkspaceConfiguration" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceWorkspaceConfiguration {

}
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets {

}
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet {

}
```


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

&dataawsccapsworkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApsWorkspaceLoggingConfigurationOutputReference <a name="DataAwsccApsWorkspaceLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration">DataAwsccApsWorkspaceLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceLoggingConfiguration">DataAwsccApsWorkspaceLoggingConfiguration</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold">QspThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QspThreshold`<sup>Required</sup> <a name="QspThreshold" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold"></a>

```go
func QspThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters"></a>

```go
func Filters() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations</a>

---


### DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference <a name="DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration">DataAwsccApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList">DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceQueryLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceQueryLoggingConfiguration">DataAwsccApsWorkspaceQueryLoggingConfiguration</a>

---


### DataAwsccApsWorkspaceTagsList <a name="DataAwsccApsWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsWorkspaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApsWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsWorkspaceTagsOutputReference <a name="DataAwsccApsWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsWorkspaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags">DataAwsccApsWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceTags">DataAwsccApsWorkspaceTags</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get"></a>

```go
func Get(index *f64) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries">MaxSeries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSeries`<sup>Required</sup> <a name="MaxSeries" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries"></a>

```go
func MaxSeries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get"></a>

```go
func Get(index *f64) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet">LabelSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet"></a>

```go
func LabelSet() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits"></a>

```go
func Limits() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>

---


### DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference <a name="DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsworkspace"

dataawsccapsworkspace.NewDataAwsccApsWorkspaceWorkspaceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets">LimitsPerLabelSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds">OutOfOrderTimeWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds">RuleQueryOffsetInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration">DataAwsccApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsPerLabelSets`<sup>Required</sup> <a name="LimitsPerLabelSets" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets"></a>

```go
func LimitsPerLabelSets() DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a>

---

##### `OutOfOrderTimeWindowInSeconds`<sup>Required</sup> <a name="OutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds"></a>

```go
func OutOfOrderTimeWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `RuleQueryOffsetInSeconds`<sup>Required</sup> <a name="RuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds"></a>

```go
func RuleQueryOffsetInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsWorkspaceWorkspaceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsWorkspace.DataAwsccApsWorkspaceWorkspaceConfiguration">DataAwsccApsWorkspaceWorkspaceConfiguration</a>

---



