# `dataAwsccIotDomainConfiguration` Submodule <a name="`dataAwsccIotDomainConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotDomainConfiguration <a name="DataAwsccIotDomainConfiguration" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_domain_configuration awscc_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration(scope: Construct, id: string, config: DataAwsccIotDomainConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig">DataAwsccIotDomainConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig">DataAwsccIotDomainConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotDomainConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isConstruct"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotDomainConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotDomainConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.applicationProtocol">applicationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference">DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference">DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainConfigurationName">domainConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainType">domainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificateArns">serverCertificateArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference">DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificates">serverCertificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList">DataAwsccIotDomainConfigurationServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList">DataAwsccIotDomainConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference">DataAwsccIotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.validationCertificateArn">validationCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationProtocol`<sup>Required</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.applicationProtocol"></a>

```typescript
public readonly applicationProtocol: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `authorizerConfig`<sup>Required</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.authorizerConfig"></a>

```typescript
public readonly authorizerConfig: DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference">DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `clientCertificateConfig`<sup>Required</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.clientCertificateConfig"></a>

```typescript
public readonly clientCertificateConfig: DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference">DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference</a>

---

##### `domainConfigurationName`<sup>Required</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainConfigurationName"></a>

```typescript
public readonly domainConfigurationName: string;
```

- *Type:* string

---

##### `domainConfigurationStatus`<sup>Required</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainConfigurationStatus"></a>

```typescript
public readonly domainConfigurationStatus: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

---

##### `serverCertificateArns`<sup>Required</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificateArns"></a>

```typescript
public readonly serverCertificateArns: string[];
```

- *Type:* string[]

---

##### `serverCertificateConfig`<sup>Required</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificateConfig"></a>

```typescript
public readonly serverCertificateConfig: DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference">DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference</a>

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: DataAwsccIotDomainConfigurationServerCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList">DataAwsccIotDomainConfigurationServerCertificatesList</a>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotDomainConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList">DataAwsccIotDomainConfigurationTagsList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: DataAwsccIotDomainConfigurationTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference">DataAwsccIotDomainConfigurationTlsConfigOutputReference</a>

---

##### `validationCertificateArn`<sup>Required</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.validationCertificateArn"></a>

```typescript
public readonly validationCertificateArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotDomainConfigurationAuthorizerConfig <a name="DataAwsccIotDomainConfigurationAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfig.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationAuthorizerConfig: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfig = { ... }
```


### DataAwsccIotDomainConfigurationClientCertificateConfig <a name="DataAwsccIotDomainConfigurationClientCertificateConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfig.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationClientCertificateConfig: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfig = { ... }
```


### DataAwsccIotDomainConfigurationConfig <a name="DataAwsccIotDomainConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationConfig: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iot_domain_configuration#id DataAwsccIotDomainConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotDomainConfigurationServerCertificateConfig <a name="DataAwsccIotDomainConfigurationServerCertificateConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfig.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationServerCertificateConfig: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfig = { ... }
```


### DataAwsccIotDomainConfigurationServerCertificates <a name="DataAwsccIotDomainConfigurationServerCertificates" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificates.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationServerCertificates: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificates = { ... }
```


### DataAwsccIotDomainConfigurationTags <a name="DataAwsccIotDomainConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationTags: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTags = { ... }
```


### DataAwsccIotDomainConfigurationTlsConfig <a name="DataAwsccIotDomainConfigurationTlsConfig" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfig.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

const dataAwsccIotDomainConfigurationTlsConfig: dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference <a name="DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfig">DataAwsccIotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAuthorizerOverride`<sup>Required</sup> <a name="allowAuthorizerOverride" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```typescript
public readonly allowAuthorizerOverride: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `defaultAuthorizerName`<sup>Required</sup> <a name="defaultAuthorizerName" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```typescript
public readonly defaultAuthorizerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationAuthorizerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationAuthorizerConfig">DataAwsccIotDomainConfigurationAuthorizerConfig</a>

---


### DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference <a name="DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn">clientCertificateCallbackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfig">DataAwsccIotDomainConfigurationClientCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateCallbackArn`<sup>Required</sup> <a name="clientCertificateCallbackArn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn"></a>

```typescript
public readonly clientCertificateCallbackArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationClientCertificateConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationClientCertificateConfig">DataAwsccIotDomainConfigurationClientCertificateConfig</a>

---


### DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference <a name="DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck">enableOcspCheck</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn">ocspAuthorizedResponderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn">ocspLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfig">DataAwsccIotDomainConfigurationServerCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableOcspCheck`<sup>Required</sup> <a name="enableOcspCheck" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck"></a>

```typescript
public readonly enableOcspCheck: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ocspAuthorizedResponderArn`<sup>Required</sup> <a name="ocspAuthorizedResponderArn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn"></a>

```typescript
public readonly ocspAuthorizedResponderArn: string;
```

- *Type:* string

---

##### `ocspLambdaArn`<sup>Required</sup> <a name="ocspLambdaArn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn"></a>

```typescript
public readonly ocspLambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationServerCertificateConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificateConfig">DataAwsccIotDomainConfigurationServerCertificateConfig</a>

---


### DataAwsccIotDomainConfigurationServerCertificatesList <a name="DataAwsccIotDomainConfigurationServerCertificatesList" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.get"></a>

```typescript
public get(index: number): DataAwsccIotDomainConfigurationServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotDomainConfigurationServerCertificatesOutputReference <a name="DataAwsccIotDomainConfigurationServerCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus">serverCertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail">serverCertificateStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificates">DataAwsccIotDomainConfigurationServerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

---

##### `serverCertificateStatus`<sup>Required</sup> <a name="serverCertificateStatus" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus"></a>

```typescript
public readonly serverCertificateStatus: string;
```

- *Type:* string

---

##### `serverCertificateStatusDetail`<sup>Required</sup> <a name="serverCertificateStatusDetail" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail"></a>

```typescript
public readonly serverCertificateStatusDetail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationServerCertificates;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationServerCertificates">DataAwsccIotDomainConfigurationServerCertificates</a>

---


### DataAwsccIotDomainConfigurationTagsList <a name="DataAwsccIotDomainConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotDomainConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotDomainConfigurationTagsOutputReference <a name="DataAwsccIotDomainConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTags">DataAwsccIotDomainConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTags">DataAwsccIotDomainConfigurationTags</a>

---


### DataAwsccIotDomainConfigurationTlsConfigOutputReference <a name="DataAwsccIotDomainConfigurationTlsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotDomainConfiguration } from '@cdktn/provider-awscc'

new dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfig">DataAwsccIotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotDomainConfigurationTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotDomainConfiguration.DataAwsccIotDomainConfigurationTlsConfig">DataAwsccIotDomainConfigurationTlsConfig</a>

---



