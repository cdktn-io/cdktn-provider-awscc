# `dataAwsccAppstreamStack` Submodule <a name="`dataAwsccAppstreamStack` Submodule" id="@cdktn/provider-awscc.dataAwsccAppstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppstreamStack <a name="DataAwsccAppstreamStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStack(scope Construct, id *string, config DataAwsccAppstreamStackConfig) DataAwsccAppstreamStack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig">DataAwsccAppstreamStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig">DataAwsccAppstreamStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.DataAwsccAppstreamStack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.DataAwsccAppstreamStack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.DataAwsccAppstreamStack_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.DataAwsccAppstreamStack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppstreamStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppstreamStack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList">DataAwsccAppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.agentAccessConfig">AgentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference">DataAwsccAppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference">DataAwsccAppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.attributesToDelete">AttributesToDelete</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.contentRedirection">ContentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference">DataAwsccAppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.deleteStorageConnectors">DeleteStorageConnectors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.embedHostDomains">EmbedHostDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.feedbackUrl">FeedbackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList">DataAwsccAppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.streamingExperienceSettings">StreamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference">DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList">DataAwsccAppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList">DataAwsccAppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.accessEndpoints"></a>

```go
func AccessEndpoints() DataAwsccAppstreamStackAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList">DataAwsccAppstreamStackAccessEndpointsList</a>

---

##### `AgentAccessConfig`<sup>Required</sup> <a name="AgentAccessConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.agentAccessConfig"></a>

```go
func AgentAccessConfig() DataAwsccAppstreamStackAgentAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference">DataAwsccAppstreamStackAgentAccessConfigOutputReference</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.applicationSettings"></a>

```go
func ApplicationSettings() DataAwsccAppstreamStackApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference">DataAwsccAppstreamStackApplicationSettingsOutputReference</a>

---

##### `AttributesToDelete`<sup>Required</sup> <a name="AttributesToDelete" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.attributesToDelete"></a>

```go
func AttributesToDelete() *[]*string
```

- *Type:* *[]*string

---

##### `ContentRedirection`<sup>Required</sup> <a name="ContentRedirection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.contentRedirection"></a>

```go
func ContentRedirection() DataAwsccAppstreamStackContentRedirectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference">DataAwsccAppstreamStackContentRedirectionOutputReference</a>

---

##### `DeleteStorageConnectors`<sup>Required</sup> <a name="DeleteStorageConnectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.deleteStorageConnectors"></a>

```go
func DeleteStorageConnectors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EmbedHostDomains`<sup>Required</sup> <a name="EmbedHostDomains" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.embedHostDomains"></a>

```go
func EmbedHostDomains() *[]*string
```

- *Type:* *[]*string

---

##### `FeedbackUrl`<sup>Required</sup> <a name="FeedbackUrl" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.feedbackUrl"></a>

```go
func FeedbackUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.storageConnectors"></a>

```go
func StorageConnectors() DataAwsccAppstreamStackStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList">DataAwsccAppstreamStackStorageConnectorsList</a>

---

##### `StreamingExperienceSettings`<sup>Required</sup> <a name="StreamingExperienceSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.streamingExperienceSettings"></a>

```go
func StreamingExperienceSettings() DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference">DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tags"></a>

```go
func Tags() DataAwsccAppstreamStackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList">DataAwsccAppstreamStackTagsList</a>

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.userSettings"></a>

```go
func UserSettings() DataAwsccAppstreamStackUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList">DataAwsccAppstreamStackUserSettingsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppstreamStackAccessEndpoints <a name="DataAwsccAppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackAccessEndpoints {

}
```


### DataAwsccAppstreamStackAgentAccessConfig <a name="DataAwsccAppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackAgentAccessConfig {

}
```


### DataAwsccAppstreamStackAgentAccessConfigSettings <a name="DataAwsccAppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackAgentAccessConfigSettings {

}
```


### DataAwsccAppstreamStackApplicationSettings <a name="DataAwsccAppstreamStackApplicationSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackApplicationSettings {

}
```


### DataAwsccAppstreamStackConfig <a name="DataAwsccAppstreamStackConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack#id DataAwsccAppstreamStack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppstreamStackContentRedirection <a name="DataAwsccAppstreamStackContentRedirection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackContentRedirection {

}
```


### DataAwsccAppstreamStackContentRedirectionHostToClient <a name="DataAwsccAppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackContentRedirectionHostToClient {

}
```


### DataAwsccAppstreamStackStorageConnectors <a name="DataAwsccAppstreamStackStorageConnectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackStorageConnectors {

}
```


### DataAwsccAppstreamStackStreamingExperienceSettings <a name="DataAwsccAppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackStreamingExperienceSettings {

}
```


### DataAwsccAppstreamStackTags <a name="DataAwsccAppstreamStackTags" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackTags {

}
```


### DataAwsccAppstreamStackUserSettings <a name="DataAwsccAppstreamStackUserSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

&dataawsccappstreamstack.DataAwsccAppstreamStackUserSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppstreamStackAccessEndpointsList <a name="DataAwsccAppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackAccessEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppstreamStackAccessEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get"></a>

```go
func Get(index *f64) DataAwsccAppstreamStackAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppstreamStackAccessEndpointsOutputReference <a name="DataAwsccAppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackAccessEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppstreamStackAccessEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.vpceId">VpceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints">DataAwsccAppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```go
func VpceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackAccessEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints">DataAwsccAppstreamStackAccessEndpoints</a>

---


### DataAwsccAppstreamStackAgentAccessConfigOutputReference <a name="DataAwsccAppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackAgentAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppstreamStackAgentAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">ScreenImageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenResolution">ScreenResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">ScreenshotsUploadEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList">DataAwsccAppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.userControlMode">UserControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig">DataAwsccAppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `ScreenImageFormat`<sup>Required</sup> <a name="ScreenImageFormat" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```go
func ScreenImageFormat() *string
```

- *Type:* *string

---

##### `ScreenResolution`<sup>Required</sup> <a name="ScreenResolution" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```go
func ScreenResolution() *string
```

- *Type:* *string

---

##### `ScreenshotsUploadEnabled`<sup>Required</sup> <a name="ScreenshotsUploadEnabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```go
func ScreenshotsUploadEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```go
func Settings() DataAwsccAppstreamStackAgentAccessConfigSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList">DataAwsccAppstreamStackAgentAccessConfigSettingsList</a>

---

##### `UserControlMode`<sup>Required</sup> <a name="UserControlMode" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```go
func UserControlMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackAgentAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig">DataAwsccAppstreamStackAgentAccessConfig</a>

---


### DataAwsccAppstreamStackAgentAccessConfigSettingsList <a name="DataAwsccAppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackAgentAccessConfigSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppstreamStackAgentAccessConfigSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference <a name="DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">AgentAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings">DataAwsccAppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentAction`<sup>Required</sup> <a name="AgentAction" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```go
func AgentAction() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackAgentAccessConfigSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings">DataAwsccAppstreamStackAgentAccessConfigSettings</a>

---


### DataAwsccAppstreamStackApplicationSettingsOutputReference <a name="DataAwsccAppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackApplicationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppstreamStackApplicationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings">DataAwsccAppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```go
func SettingsGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings">DataAwsccAppstreamStackApplicationSettings</a>

---


### DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference <a name="DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackContentRedirectionHostToClientOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">AllowedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">DeniedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient">DataAwsccAppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedUrls`<sup>Required</sup> <a name="AllowedUrls" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```go
func AllowedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedUrls`<sup>Required</sup> <a name="DeniedUrls" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```go
func DeniedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackContentRedirectionHostToClient
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient">DataAwsccAppstreamStackContentRedirectionHostToClient</a>

---


### DataAwsccAppstreamStackContentRedirectionOutputReference <a name="DataAwsccAppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackContentRedirectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppstreamStackContentRedirectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.hostToClient">HostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference">DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection">DataAwsccAppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostToClient`<sup>Required</sup> <a name="HostToClient" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```go
func HostToClient() DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference">DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackContentRedirection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection">DataAwsccAppstreamStackContentRedirection</a>

---


### DataAwsccAppstreamStackStorageConnectorsList <a name="DataAwsccAppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackStorageConnectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppstreamStackStorageConnectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get"></a>

```go
func Get(index *f64) DataAwsccAppstreamStackStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppstreamStackStorageConnectorsOutputReference <a name="DataAwsccAppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackStorageConnectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppstreamStackStorageConnectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors">DataAwsccAppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackStorageConnectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors">DataAwsccAppstreamStackStorageConnectors</a>

---


### DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference <a name="DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackStreamingExperienceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings">DataAwsccAppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```go
func PreferredProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackStreamingExperienceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings">DataAwsccAppstreamStackStreamingExperienceSettings</a>

---


### DataAwsccAppstreamStackTagsList <a name="DataAwsccAppstreamStackTagsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppstreamStackTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppstreamStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppstreamStackTagsOutputReference <a name="DataAwsccAppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppstreamStackTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags">DataAwsccAppstreamStackTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags">DataAwsccAppstreamStackTags</a>

---


### DataAwsccAppstreamStackUserSettingsList <a name="DataAwsccAppstreamStackUserSettingsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackUserSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppstreamStackUserSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccAppstreamStackUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppstreamStackUserSettingsOutputReference <a name="DataAwsccAppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappstreamstack"

dataawsccappstreamstack.NewDataAwsccAppstreamStackUserSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppstreamStackUserSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.maximumLength">MaximumLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings">DataAwsccAppstreamStackUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```go
func MaximumLength() *f64
```

- *Type:* *f64

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppstreamStackUserSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings">DataAwsccAppstreamStackUserSettings</a>

---



