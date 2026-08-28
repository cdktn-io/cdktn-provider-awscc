# `dataAwsccAppsyncChannelNamespace` Submodule <a name="`dataAwsccAppsyncChannelNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncChannelNamespace <a name="DataAwsccAppsyncChannelNamespace" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_channel_namespace awscc_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespace(scope Construct, id *string, config DataAwsccAppsyncChannelNamespaceConfig) DataAwsccAppsyncChannelNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig">DataAwsccAppsyncChannelNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig">DataAwsccAppsyncChannelNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppsyncChannelNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn">ChannelNamespaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers">CodeHandlers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location">CodeS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs">HandlerConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes">PublishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes">SubscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ChannelNamespaceArn`<sup>Required</sup> <a name="ChannelNamespaceArn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.channelNamespaceArn"></a>

```go
func ChannelNamespaceArn() *string
```

- *Type:* *string

---

##### `CodeHandlers`<sup>Required</sup> <a name="CodeHandlers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeHandlers"></a>

```go
func CodeHandlers() *string
```

- *Type:* *string

---

##### `CodeS3Location`<sup>Required</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.codeS3Location"></a>

```go
func CodeS3Location() *string
```

- *Type:* *string

---

##### `HandlerConfigs`<sup>Required</sup> <a name="HandlerConfigs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.handlerConfigs"></a>

```go
func HandlerConfigs() DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublishAuthModes`<sup>Required</sup> <a name="PublishAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.publishAuthModes"></a>

```go
func PublishAuthModes() DataAwsccAppsyncChannelNamespacePublishAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList">DataAwsccAppsyncChannelNamespacePublishAuthModesList</a>

---

##### `SubscribeAuthModes`<sup>Required</sup> <a name="SubscribeAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.subscribeAuthModes"></a>

```go
func SubscribeAuthModes() DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList">DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tags"></a>

```go
func Tags() DataAwsccAppsyncChannelNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList">DataAwsccAppsyncChannelNamespaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncChannelNamespaceConfig <a name="DataAwsccAppsyncChannelNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_channel_namespace#id DataAwsccAppsyncChannelNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncChannelNamespaceHandlerConfigs <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigs" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration {

}
```


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig {

}
```


### DataAwsccAppsyncChannelNamespacePublishAuthModes <a name="DataAwsccAppsyncChannelNamespacePublishAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes {

}
```


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModes <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModes" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes {

}
```


### DataAwsccAppsyncChannelNamespaceTags <a name="DataAwsccAppsyncChannelNamespaceTags" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

&dataawsccappsyncchannelnamespace.DataAwsccAppsyncChannelNamespaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">InvokeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvokeType`<sup>Required</sup> <a name="InvokeType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```go
func InvokeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">DataSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```go
func DataSourceName() *string
```

- *Type:* *string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```go
func LambdaConfig() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```go
func Integration() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">InvokeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvokeType`<sup>Required</sup> <a name="InvokeType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```go
func InvokeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">DataSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```go
func DataSourceName() *string
```

- *Type:* *string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```go
func LambdaConfig() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">Integration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```go
func Integration() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference <a name="DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">OnPublish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">OnSubscribe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnPublish`<sup>Required</sup> <a name="OnPublish" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```go
func OnPublish() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference</a>

---

##### `OnSubscribe`<sup>Required</sup> <a name="OnSubscribe" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```go
func OnSubscribe() DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference">DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceHandlerConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceHandlerConfigs">DataAwsccAppsyncChannelNamespaceHandlerConfigs</a>

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesList <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespacePublishAuthModesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppsyncChannelNamespacePublishAuthModesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get"></a>

```go
func Get(index *f64) DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespacePublishAuthModes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespacePublishAuthModes">DataAwsccAppsyncChannelNamespacePublishAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceSubscribeAuthModesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get"></a>

```go
func Get(index *f64) DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference <a name="DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceSubscribeAuthModes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceSubscribeAuthModes">DataAwsccAppsyncChannelNamespaceSubscribeAuthModes</a>

---


### DataAwsccAppsyncChannelNamespaceTagsList <a name="DataAwsccAppsyncChannelNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppsyncChannelNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppsyncChannelNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppsyncChannelNamespaceTagsOutputReference <a name="DataAwsccAppsyncChannelNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncchannelnamespace"

dataawsccappsyncchannelnamespace.NewDataAwsccAppsyncChannelNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppsyncChannelNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncChannelNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncChannelNamespace.DataAwsccAppsyncChannelNamespaceTags">DataAwsccAppsyncChannelNamespaceTags</a>

---



