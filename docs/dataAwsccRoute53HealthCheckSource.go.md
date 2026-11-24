# `dataAwsccRoute53HealthCheckSource` Submodule <a name="`dataAwsccRoute53HealthCheckSource` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53HealthCheckSource <a name="DataAwsccRoute53HealthCheckSource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source awscc_route53_health_check_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSource(scope Construct, id *string, config DataAwsccRoute53HealthCheckSourceConfig) DataAwsccRoute53HealthCheckSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53HealthCheckSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53HealthCheckSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53HealthCheckSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53HealthCheckSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53HealthCheckSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceConfig">HealthCheckSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceId">HealthCheckSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceStatus">HealthCheckSourceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList">DataAwsccRoute53HealthCheckSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HealthCheckSourceConfig`<sup>Required</sup> <a name="HealthCheckSourceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceConfig"></a>

```go
func HealthCheckSourceConfig() DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference</a>

---

##### `HealthCheckSourceId`<sup>Required</sup> <a name="HealthCheckSourceId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceId"></a>

```go
func HealthCheckSourceId() *string
```

- *Type:* *string

---

##### `HealthCheckSourceStatus`<sup>Required</sup> <a name="HealthCheckSourceStatus" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.healthCheckSourceStatus"></a>

```go
func HealthCheckSourceStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tags"></a>

```go
func Tags() DataAwsccRoute53HealthCheckSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList">DataAwsccRoute53HealthCheckSourceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53HealthCheckSourceConfig <a name="DataAwsccRoute53HealthCheckSourceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

&dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSourceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53_health_check_source#id DataAwsccRoute53HealthCheckSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

&dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig {

}
```


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

&dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct {

}
```


### DataAwsccRoute53HealthCheckSourceTags <a name="DataAwsccRoute53HealthCheckSourceTags" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

&dataawsccroute53healthchecksource.DataAwsccRoute53HealthCheckSourceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList">SubnetConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetConfigurationList`<sup>Required</sup> <a name="SubnetConfigurationList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList"></a>

```go
func SubnetConfigurationList() DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfig</a>

---


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference <a name="DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList"></a>

```go
func SecurityGroupIdList() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">DataAwsccRoute53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>

---


### DataAwsccRoute53HealthCheckSourceTagsList <a name="DataAwsccRoute53HealthCheckSourceTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53HealthCheckSourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53HealthCheckSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53HealthCheckSourceTagsOutputReference <a name="DataAwsccRoute53HealthCheckSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccroute53healthchecksource"

dataawsccroute53healthchecksource.NewDataAwsccRoute53HealthCheckSourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53HealthCheckSourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags">DataAwsccRoute53HealthCheckSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HealthCheckSourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HealthCheckSource.DataAwsccRoute53HealthCheckSourceTags">DataAwsccRoute53HealthCheckSourceTags</a>

---



