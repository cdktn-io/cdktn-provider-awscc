# `dataAwsccCognitoUserPoolDomain` Submodule <a name="`dataAwsccCognitoUserPoolDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolDomain <a name="DataAwsccCognitoUserPoolDomain" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain awscc_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.NewDataAwsccCognitoUserPoolDomain(scope Construct, id *string, config DataAwsccCognitoUserPoolDomainConfig) DataAwsccCognitoUserPoolDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig">DataAwsccCognitoUserPoolDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig">DataAwsccCognitoUserPoolDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoUserPoolDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cloudfrontDistribution">CloudfrontDistribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.customDomainConfig">CustomDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference">DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.managedLoginVersion">ManagedLoginVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.routing">Routing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference">DataAwsccCognitoUserPoolDomainRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CloudfrontDistribution`<sup>Required</sup> <a name="CloudfrontDistribution" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```go
func CloudfrontDistribution() *string
```

- *Type:* *string

---

##### `CustomDomainConfig`<sup>Required</sup> <a name="CustomDomainConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.customDomainConfig"></a>

```go
func CustomDomainConfig() DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference">DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ManagedLoginVersion`<sup>Required</sup> <a name="ManagedLoginVersion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.managedLoginVersion"></a>

```go
func ManagedLoginVersion() *f64
```

- *Type:* *f64

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.routing"></a>

```go
func Routing() DataAwsccCognitoUserPoolDomainRoutingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference">DataAwsccCognitoUserPoolDomainRoutingOutputReference</a>

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolDomainConfig <a name="DataAwsccCognitoUserPoolDomainConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

&dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomainConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain#id DataAwsccCognitoUserPoolDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolDomainCustomDomainConfig <a name="DataAwsccCognitoUserPoolDomainCustomDomainConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

&dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig {

}
```


### DataAwsccCognitoUserPoolDomainRouting <a name="DataAwsccCognitoUserPoolDomainRouting" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

&dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomainRouting {

}
```


### DataAwsccCognitoUserPoolDomainRoutingFailover <a name="DataAwsccCognitoUserPoolDomainRoutingFailover" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

&dataawscccognitouserpooldomain.DataAwsccCognitoUserPoolDomainRoutingFailover {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference <a name="DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.NewDataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig">DataAwsccCognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolDomainCustomDomainConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig">DataAwsccCognitoUserPoolDomainCustomDomainConfig</a>

---


### DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference <a name="DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.NewDataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId">PrimaryRoute53HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion">SecondaryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover">DataAwsccCognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryRoute53HealthCheckId`<sup>Required</sup> <a name="PrimaryRoute53HealthCheckId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId"></a>

```go
func PrimaryRoute53HealthCheckId() *string
```

- *Type:* *string

---

##### `SecondaryRegion`<sup>Required</sup> <a name="SecondaryRegion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion"></a>

```go
func SecondaryRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolDomainRoutingFailover
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover">DataAwsccCognitoUserPoolDomainRoutingFailover</a>

---


### DataAwsccCognitoUserPoolDomainRoutingOutputReference <a name="DataAwsccCognitoUserPoolDomainRoutingOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpooldomain"

dataawscccognitouserpooldomain.NewDataAwsccCognitoUserPoolDomainRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolDomainRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.failover">Failover</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference">DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting">DataAwsccCognitoUserPoolDomainRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.failover"></a>

```go
func Failover() DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference">DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolDomainRouting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting">DataAwsccCognitoUserPoolDomainRouting</a>

---



