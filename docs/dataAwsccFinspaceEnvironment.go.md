# `dataAwsccFinspaceEnvironment` Submodule <a name="`dataAwsccFinspaceEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFinspaceEnvironment <a name="DataAwsccFinspaceEnvironment" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironment(scope Construct, id *string, config DataAwsccFinspaceEnvironmentConfig) DataAwsccFinspaceEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig">DataAwsccFinspaceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig">DataAwsccFinspaceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccFinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccFinspaceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccFinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles">DataBundles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId">DedicatedServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl">EnvironmentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode">FederationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters">FederationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl">SageMakerStudioDomainUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters">SuperuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DataBundles`<sup>Required</sup> <a name="DataBundles" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dataBundles"></a>

```go
func DataBundles() *[]*string
```

- *Type:* *[]*string

---

##### `DedicatedServiceAccountId`<sup>Required</sup> <a name="DedicatedServiceAccountId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```go
func DedicatedServiceAccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentArn"></a>

```go
func EnvironmentArn() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `EnvironmentUrl`<sup>Required</sup> <a name="EnvironmentUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.environmentUrl"></a>

```go
func EnvironmentUrl() *string
```

- *Type:* *string

---

##### `FederationMode`<sup>Required</sup> <a name="FederationMode" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationMode"></a>

```go
func FederationMode() *string
```

- *Type:* *string

---

##### `FederationParameters`<sup>Required</sup> <a name="FederationParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.federationParameters"></a>

```go
func FederationParameters() DataAwsccFinspaceEnvironmentFederationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference">DataAwsccFinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SageMakerStudioDomainUrl`<sup>Required</sup> <a name="SageMakerStudioDomainUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```go
func SageMakerStudioDomainUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SuperuserParameters`<sup>Required</sup> <a name="SuperuserParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.superuserParameters"></a>

```go
func SuperuserParameters() DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference">DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tags"></a>

```go
func Tags() DataAwsccFinspaceEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList">DataAwsccFinspaceEnvironmentTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFinspaceEnvironmentConfig <a name="DataAwsccFinspaceEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

&dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/finspace_environment#id DataAwsccFinspaceEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFinspaceEnvironmentFederationParameters <a name="DataAwsccFinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

&dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironmentFederationParameters {

}
```


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMap <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

&dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap {

}
```


### DataAwsccFinspaceEnvironmentSuperuserParameters <a name="DataAwsccFinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

&dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironmentSuperuserParameters {

}
```


### DataAwsccFinspaceEnvironmentTags <a name="DataAwsccFinspaceEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

&dataawsccfinspaceenvironment.DataAwsccFinspaceEnvironmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentFederationParametersAttributeMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```go
func Get(index *f64) DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFinspaceEnvironmentFederationParametersAttributeMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMap">DataAwsccFinspaceEnvironmentFederationParametersAttributeMap</a>

---


### DataAwsccFinspaceEnvironmentFederationParametersOutputReference <a name="DataAwsccFinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentFederationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFinspaceEnvironmentFederationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">ApplicationCallBackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">AttributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">FederationProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">FederationUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationCallBackUrl`<sup>Required</sup> <a name="ApplicationCallBackUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```go
func ApplicationCallBackUrl() *string
```

- *Type:* *string

---

##### `AttributeMap`<sup>Required</sup> <a name="AttributeMap" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```go
func AttributeMap() DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList">DataAwsccFinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `FederationProviderName`<sup>Required</sup> <a name="FederationProviderName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```go
func FederationProviderName() *string
```

- *Type:* *string

---

##### `FederationUrn`<sup>Required</sup> <a name="FederationUrn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```go
func FederationUrn() *string
```

- *Type:* *string

---

##### `SamlMetadataDocument`<sup>Required</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```go
func SamlMetadataDocument() *string
```

- *Type:* *string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```go
func SamlMetadataUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFinspaceEnvironmentFederationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentFederationParameters">DataAwsccFinspaceEnvironmentFederationParameters</a>

---


### DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference <a name="DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentSuperuserParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFinspaceEnvironmentSuperuserParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentSuperuserParameters">DataAwsccFinspaceEnvironmentSuperuserParameters</a>

---


### DataAwsccFinspaceEnvironmentTagsList <a name="DataAwsccFinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFinspaceEnvironmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccFinspaceEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFinspaceEnvironmentTagsOutputReference <a name="DataAwsccFinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfinspaceenvironment"

dataawsccfinspaceenvironment.NewDataAwsccFinspaceEnvironmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFinspaceEnvironmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFinspaceEnvironmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFinspaceEnvironment.DataAwsccFinspaceEnvironmentTags">DataAwsccFinspaceEnvironmentTags</a>

---



