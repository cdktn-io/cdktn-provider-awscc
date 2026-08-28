# `dataAwsccElasticbeanstalkEnvironment` Submodule <a name="`dataAwsccElasticbeanstalkEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkEnvironment <a name="DataAwsccElasticbeanstalkEnvironment" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironment(scope Construct, id *string, config DataAwsccElasticbeanstalkEnvironmentConfig) DataAwsccElasticbeanstalkEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig">DataAwsccElasticbeanstalkEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig">DataAwsccElasticbeanstalkEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticbeanstalkEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticbeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.cnamePrefix">CnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.operationsRole">OperationsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList">DataAwsccElasticbeanstalkEnvironmentOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.platformArn">PlatformArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList">DataAwsccElasticbeanstalkEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tier">Tier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference">DataAwsccElasticbeanstalkEnvironmentTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.versionLabel">VersionLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `CnamePrefix`<sup>Required</sup> <a name="CnamePrefix" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.cnamePrefix"></a>

```go
func CnamePrefix() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.environmentName"></a>

```go
func EnvironmentName() *string
```

- *Type:* *string

---

##### `OperationsRole`<sup>Required</sup> <a name="OperationsRole" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.operationsRole"></a>

```go
func OperationsRole() *string
```

- *Type:* *string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.optionSettings"></a>

```go
func OptionSettings() DataAwsccElasticbeanstalkEnvironmentOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList">DataAwsccElasticbeanstalkEnvironmentOptionSettingsList</a>

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.platformArn"></a>

```go
func PlatformArn() *string
```

- *Type:* *string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.solutionStackName"></a>

```go
func SolutionStackName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tags"></a>

```go
func Tags() DataAwsccElasticbeanstalkEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList">DataAwsccElasticbeanstalkEnvironmentTagsList</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tier"></a>

```go
func Tier() DataAwsccElasticbeanstalkEnvironmentTierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference">DataAwsccElasticbeanstalkEnvironmentTierOutputReference</a>

---

##### `VersionLabel`<sup>Required</sup> <a name="VersionLabel" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.versionLabel"></a>

```go
func VersionLabel() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkEnvironmentConfig <a name="DataAwsccElasticbeanstalkEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

&dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_environment#id DataAwsccElasticbeanstalkEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkEnvironmentOptionSettings <a name="DataAwsccElasticbeanstalkEnvironmentOptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

&dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettings {

}
```


### DataAwsccElasticbeanstalkEnvironmentTags <a name="DataAwsccElasticbeanstalkEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

&dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironmentTags {

}
```


### DataAwsccElasticbeanstalkEnvironmentTier <a name="DataAwsccElasticbeanstalkEnvironmentTier" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

&dataawsccelasticbeanstalkenvironment.DataAwsccElasticbeanstalkEnvironmentTier {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkEnvironmentOptionSettingsList <a name="DataAwsccElasticbeanstalkEnvironmentOptionSettingsList" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironmentOptionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticbeanstalkEnvironmentOptionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference <a name="DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettings">DataAwsccElasticbeanstalkEnvironmentOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName"></a>

```go
func OptionName() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticbeanstalkEnvironmentOptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentOptionSettings">DataAwsccElasticbeanstalkEnvironmentOptionSettings</a>

---


### DataAwsccElasticbeanstalkEnvironmentTagsList <a name="DataAwsccElasticbeanstalkEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticbeanstalkEnvironmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticbeanstalkEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticbeanstalkEnvironmentTagsOutputReference <a name="DataAwsccElasticbeanstalkEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticbeanstalkEnvironmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTags">DataAwsccElasticbeanstalkEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticbeanstalkEnvironmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTags">DataAwsccElasticbeanstalkEnvironmentTags</a>

---


### DataAwsccElasticbeanstalkEnvironmentTierOutputReference <a name="DataAwsccElasticbeanstalkEnvironmentTierOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticbeanstalkenvironment"

dataawsccelasticbeanstalkenvironment.NewDataAwsccElasticbeanstalkEnvironmentTierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticbeanstalkEnvironmentTierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTier">DataAwsccElasticbeanstalkEnvironmentTier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTierOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticbeanstalkEnvironmentTier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkEnvironment.DataAwsccElasticbeanstalkEnvironmentTier">DataAwsccElasticbeanstalkEnvironmentTier</a>

---



