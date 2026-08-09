# `dataAwsccApigatewayDomainName` Submodule <a name="`dataAwsccApigatewayDomainName` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayDomainName <a name="DataAwsccApigatewayDomainName" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_domain_name awscc_apigateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.NewDataAwsccApigatewayDomainName(scope Construct, id *string, config DataAwsccApigatewayDomainNameConfig) DataAwsccApigatewayDomainName
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig">DataAwsccApigatewayDomainNameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig">DataAwsccApigatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayDomainName resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.DataAwsccApigatewayDomainName_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.DataAwsccApigatewayDomainName_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.DataAwsccApigatewayDomainName_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.DataAwsccApigatewayDomainName_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApigatewayDomainName resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApigatewayDomainName to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApigatewayDomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayDomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.distributionDomainName">DistributionDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.distributionHostedZoneId">DistributionHostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.domainNameArn">DomainNameArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference">DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference">DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalHostedZoneId">RegionalHostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.routingMode">RoutingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList">DataAwsccApigatewayDomainNameTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DistributionDomainName`<sup>Required</sup> <a name="DistributionDomainName" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.distributionDomainName"></a>

```go
func DistributionDomainName() *string
```

- *Type:* *string

---

##### `DistributionHostedZoneId`<sup>Required</sup> <a name="DistributionHostedZoneId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.distributionHostedZoneId"></a>

```go
func DistributionHostedZoneId() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.domainNameArn"></a>

```go
func DomainNameArn() *string
```

- *Type:* *string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.endpointAccessMode"></a>

```go
func EndpointAccessMode() *string
```

- *Type:* *string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference">DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference</a>

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.mutualTlsAuthentication"></a>

```go
func MutualTlsAuthentication() DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference">DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.ownershipVerificationCertificateArn"></a>

```go
func OwnershipVerificationCertificateArn() *string
```

- *Type:* *string

---

##### `RegionalCertificateArn`<sup>Required</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalCertificateArn"></a>

```go
func RegionalCertificateArn() *string
```

- *Type:* *string

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalDomainName"></a>

```go
func RegionalDomainName() *string
```

- *Type:* *string

---

##### `RegionalHostedZoneId`<sup>Required</sup> <a name="RegionalHostedZoneId" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.regionalHostedZoneId"></a>

```go
func RegionalHostedZoneId() *string
```

- *Type:* *string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.routingMode"></a>

```go
func RoutingMode() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.tags"></a>

```go
func Tags() DataAwsccApigatewayDomainNameTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList">DataAwsccApigatewayDomainNameTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainName.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayDomainNameConfig <a name="DataAwsccApigatewayDomainNameConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

&dataawsccapigatewaydomainname.DataAwsccApigatewayDomainNameConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_domain_name#id DataAwsccApigatewayDomainName#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayDomainNameEndpointConfiguration <a name="DataAwsccApigatewayDomainNameEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

&dataawsccapigatewaydomainname.DataAwsccApigatewayDomainNameEndpointConfiguration {

}
```


### DataAwsccApigatewayDomainNameMutualTlsAuthentication <a name="DataAwsccApigatewayDomainNameMutualTlsAuthentication" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

&dataawsccapigatewaydomainname.DataAwsccApigatewayDomainNameMutualTlsAuthentication {

}
```


### DataAwsccApigatewayDomainNameTags <a name="DataAwsccApigatewayDomainNameTags" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

&dataawsccapigatewaydomainname.DataAwsccApigatewayDomainNameTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference <a name="DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.NewDataAwsccApigatewayDomainNameEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfiguration">DataAwsccApigatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayDomainNameEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameEndpointConfiguration">DataAwsccApigatewayDomainNameEndpointConfiguration</a>

---


### DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference <a name="DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.NewDataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthentication">DataAwsccApigatewayDomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```go
func TruststoreUri() *string
```

- *Type:* *string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```go
func TruststoreVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayDomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameMutualTlsAuthentication">DataAwsccApigatewayDomainNameMutualTlsAuthentication</a>

---


### DataAwsccApigatewayDomainNameTagsList <a name="DataAwsccApigatewayDomainNameTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.NewDataAwsccApigatewayDomainNameTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayDomainNameTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayDomainNameTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayDomainNameTagsOutputReference <a name="DataAwsccApigatewayDomainNameTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewaydomainname"

dataawsccapigatewaydomainname.NewDataAwsccApigatewayDomainNameTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayDomainNameTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTags">DataAwsccApigatewayDomainNameTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayDomainNameTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayDomainName.DataAwsccApigatewayDomainNameTags">DataAwsccApigatewayDomainNameTags</a>

---



