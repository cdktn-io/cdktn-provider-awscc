# `dataAwsccAppsyncGraphQlApi` Submodule <a name="`dataAwsccAppsyncGraphQlApi` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncGraphQlApi <a name="DataAwsccAppsyncGraphQlApi" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_graph_ql_api awscc_appsync_graph_ql_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApi(scope Construct, id *string, config DataAwsccAppsyncGraphQlApiConfig) DataAwsccAppsyncGraphQlApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig">DataAwsccAppsyncGraphQlApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig">DataAwsccAppsyncGraphQlApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncGraphQlApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApi_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppsyncGraphQlApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppsyncGraphQlApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppsyncGraphQlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncGraphQlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.additionalAuthenticationProviders">AdditionalAuthenticationProviders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.enhancedMetricsConfig">EnhancedMetricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlDns">GraphQlDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlEndpointArn">GraphQlEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlUrl">GraphQlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.introspectionConfig">IntrospectionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference">DataAwsccAppsyncGraphQlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.mergedApiExecutionRoleArn">MergedApiExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.ownerContact">OwnerContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.queryDepthLimit">QueryDepthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeDns">RealtimeDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeUrl">RealtimeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.resolverCountLimit">ResolverCountLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList">DataAwsccAppsyncGraphQlApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.xrayEnabled">XrayEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalAuthenticationProviders`<sup>Required</sup> <a name="AdditionalAuthenticationProviders" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.additionalAuthenticationProviders"></a>

```go
func AdditionalAuthenticationProviders() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `EnhancedMetricsConfig`<sup>Required</sup> <a name="EnhancedMetricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.enhancedMetricsConfig"></a>

```go
func EnhancedMetricsConfig() DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference</a>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GraphQlDns`<sup>Required</sup> <a name="GraphQlDns" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlDns"></a>

```go
func GraphQlDns() *string
```

- *Type:* *string

---

##### `GraphQlEndpointArn`<sup>Required</sup> <a name="GraphQlEndpointArn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlEndpointArn"></a>

```go
func GraphQlEndpointArn() *string
```

- *Type:* *string

---

##### `GraphQlUrl`<sup>Required</sup> <a name="GraphQlUrl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.graphQlUrl"></a>

```go
func GraphQlUrl() *string
```

- *Type:* *string

---

##### `IntrospectionConfig`<sup>Required</sup> <a name="IntrospectionConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.introspectionConfig"></a>

```go
func IntrospectionConfig() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.lambdaAuthorizerConfig"></a>

```go
func LambdaAuthorizerConfig() DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.logConfig"></a>

```go
func LogConfig() DataAwsccAppsyncGraphQlApiLogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference">DataAwsccAppsyncGraphQlApiLogConfigOutputReference</a>

---

##### `MergedApiExecutionRoleArn`<sup>Required</sup> <a name="MergedApiExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.mergedApiExecutionRoleArn"></a>

```go
func MergedApiExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.openIdConnectConfig"></a>

```go
func OpenIdConnectConfig() DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference</a>

---

##### `OwnerContact`<sup>Required</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.ownerContact"></a>

```go
func OwnerContact() *string
```

- *Type:* *string

---

##### `QueryDepthLimit`<sup>Required</sup> <a name="QueryDepthLimit" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.queryDepthLimit"></a>

```go
func QueryDepthLimit() *f64
```

- *Type:* *f64

---

##### `RealtimeDns`<sup>Required</sup> <a name="RealtimeDns" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeDns"></a>

```go
func RealtimeDns() *string
```

- *Type:* *string

---

##### `RealtimeUrl`<sup>Required</sup> <a name="RealtimeUrl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.realtimeUrl"></a>

```go
func RealtimeUrl() *string
```

- *Type:* *string

---

##### `ResolverCountLimit`<sup>Required</sup> <a name="ResolverCountLimit" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.resolverCountLimit"></a>

```go
func ResolverCountLimit() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tags"></a>

```go
func Tags() DataAwsccAppsyncGraphQlApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList">DataAwsccAppsyncGraphQlApiTagsList</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.userPoolConfig"></a>

```go
func UserPoolConfig() DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference</a>

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `XrayEnabled`<sup>Required</sup> <a name="XrayEnabled" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.xrayEnabled"></a>

```go
func XrayEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders {

}
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig {

}
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig {

}
```


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig {

}
```


### DataAwsccAppsyncGraphQlApiConfig <a name="DataAwsccAppsyncGraphQlApiConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_graph_ql_api#id DataAwsccAppsyncGraphQlApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig <a name="DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig {

}
```


### DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig <a name="DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig {

}
```


### DataAwsccAppsyncGraphQlApiLogConfig <a name="DataAwsccAppsyncGraphQlApiLogConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiLogConfig {

}
```


### DataAwsccAppsyncGraphQlApiOpenIdConnectConfig <a name="DataAwsccAppsyncGraphQlApiOpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig {

}
```


### DataAwsccAppsyncGraphQlApiTags <a name="DataAwsccAppsyncGraphQlApiTags" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiTags {

}
```


### DataAwsccAppsyncGraphQlApiUserPoolConfig <a name="DataAwsccAppsyncGraphQlApiUserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

&dataawsccappsyncgraphqlapi.DataAwsccAppsyncGraphQlApiUserPoolConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get"></a>

```go
func Get(index *f64) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```go
func AuthTtl() *f64
```

- *Type:* *f64

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```go
func IatTtl() *f64
```

- *Type:* *f64

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig">UserPoolConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```go
func LambdaAuthorizerConfig() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.openIdConnectConfig"></a>

```go
func OpenIdConnectConfig() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference</a>

---

##### `UserPoolConfig`<sup>Required</sup> <a name="UserPoolConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.userPoolConfig"></a>

```go
func UserPoolConfig() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders</a>

---


### DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```go
func AppIdClientRegex() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig">DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig</a>

---


### DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">DataSourceLevelMetricsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">OperationLevelMetricsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">ResolverLevelMetricsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="DataSourceLevelMetricsBehavior" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```go
func DataSourceLevelMetricsBehavior() *string
```

- *Type:* *string

---

##### `OperationLevelMetricsConfig`<sup>Required</sup> <a name="OperationLevelMetricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```go
func OperationLevelMetricsConfig() *string
```

- *Type:* *string

---

##### `ResolverLevelMetricsBehavior`<sup>Required</sup> <a name="ResolverLevelMetricsBehavior" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```go
func ResolverLevelMetricsBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig">DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig</a>

---


### DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```go
func IdentityValidationExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig">DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig</a>

---


### DataAwsccAppsyncGraphQlApiLogConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiLogConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent">ExcludeVerboseContent</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel">FieldLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig">DataAwsccAppsyncGraphQlApiLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```go
func CloudwatchLogsRoleArn() *string
```

- *Type:* *string

---

##### `ExcludeVerboseContent`<sup>Required</sup> <a name="ExcludeVerboseContent" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```go
func ExcludeVerboseContent() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FieldLogLevel`<sup>Required</sup> <a name="FieldLogLevel" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```go
func FieldLogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiLogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiLogConfig">DataAwsccAppsyncGraphQlApiLogConfig</a>

---


### DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiOpenIdConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.authTtl"></a>

```go
func AuthTtl() *f64
```

- *Type:* *f64

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```go
func IatTtl() *f64
```

- *Type:* *f64

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiOpenIdConnectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiOpenIdConnectConfig">DataAwsccAppsyncGraphQlApiOpenIdConnectConfig</a>

---


### DataAwsccAppsyncGraphQlApiTagsList <a name="DataAwsccAppsyncGraphQlApiTagsList" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppsyncGraphQlApiTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppsyncGraphQlApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppsyncGraphQlApiTagsOutputReference <a name="DataAwsccAppsyncGraphQlApiTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppsyncGraphQlApiTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags">DataAwsccAppsyncGraphQlApiTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiTags">DataAwsccAppsyncGraphQlApiTags</a>

---


### DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference <a name="DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncgraphqlapi"

dataawsccappsyncgraphqlapi.NewDataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig">DataAwsccAppsyncGraphQlApiUserPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```go
func AppIdClientRegex() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncGraphQlApiUserPoolConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncGraphQlApi.DataAwsccAppsyncGraphQlApiUserPoolConfig">DataAwsccAppsyncGraphQlApiUserPoolConfig</a>

---



