# `dataAwsccEvsEnvironment` Submodule <a name="`dataAwsccEvsEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEvsEnvironment <a name="DataAwsccEvsEnvironment" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironment(scope: Construct, id: string, config: DataAwsccEvsEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig">DataAwsccEvsEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig">DataAwsccEvsEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEvsEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.checks">checks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList">DataAwsccEvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference">DataAwsccEvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList">DataAwsccEvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentArn">environmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentState">environmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList">DataAwsccEvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference">DataAwsccEvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference">DataAwsccEvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference">DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList">DataAwsccEvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.termsAccepted">termsAccepted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference">DataAwsccEvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfVersion">vcfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.checks"></a>

```typescript
public readonly checks: DataAwsccEvsEnvironmentChecksList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList">DataAwsccEvsEnvironmentChecksList</a>

---

##### `connectivityInfo`<sup>Required</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.connectivityInfo"></a>

```typescript
public readonly connectivityInfo: DataAwsccEvsEnvironmentConnectivityInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference">DataAwsccEvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.credentials"></a>

```typescript
public readonly credentials: DataAwsccEvsEnvironmentCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList">DataAwsccEvsEnvironmentCredentialsList</a>

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `environmentState`<sup>Required</sup> <a name="environmentState" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.environmentState"></a>

```typescript
public readonly environmentState: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.hosts"></a>

```typescript
public readonly hosts: DataAwsccEvsEnvironmentHostsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList">DataAwsccEvsEnvironmentHostsList</a>

---

##### `initialVlans`<sup>Required</sup> <a name="initialVlans" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.initialVlans"></a>

```typescript
public readonly initialVlans: DataAwsccEvsEnvironmentInitialVlansOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference">DataAwsccEvsEnvironmentInitialVlansOutputReference</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: DataAwsccEvsEnvironmentLicenseInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference">DataAwsccEvsEnvironmentLicenseInfoOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroups`<sup>Required</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSecurityGroups"></a>

```typescript
public readonly serviceAccessSecurityGroups: DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference">DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.serviceAccessSubnetId"></a>

```typescript
public readonly serviceAccessSubnetId: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tags"></a>

```typescript
public readonly tags: DataAwsccEvsEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList">DataAwsccEvsEnvironmentTagsList</a>

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.termsAccepted"></a>

```typescript
public readonly termsAccepted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vcfHostnames`<sup>Required</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfHostnames"></a>

```typescript
public readonly vcfHostnames: DataAwsccEvsEnvironmentVcfHostnamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference">DataAwsccEvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vcfVersion"></a>

```typescript
public readonly vcfVersion: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEvsEnvironmentChecks <a name="DataAwsccEvsEnvironmentChecks" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentChecks: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks = { ... }
```


### DataAwsccEvsEnvironmentConfig <a name="DataAwsccEvsEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentConfig: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/evs_environment#id DataAwsccEvsEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEvsEnvironmentConnectivityInfo <a name="DataAwsccEvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentConnectivityInfo: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo = { ... }
```


### DataAwsccEvsEnvironmentCredentials <a name="DataAwsccEvsEnvironmentCredentials" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentCredentials: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials = { ... }
```


### DataAwsccEvsEnvironmentHosts <a name="DataAwsccEvsEnvironmentHosts" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentHosts: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts = { ... }
```


### DataAwsccEvsEnvironmentInitialVlans <a name="DataAwsccEvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlans: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansEdgeVTep <a name="DataAwsccEvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansEdgeVTep: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansExpansionVlan1: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansExpansionVlan2: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansHcx <a name="DataAwsccEvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansHcx: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansNsxUpLink <a name="DataAwsccEvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansNsxUpLink: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansVmkManagement <a name="DataAwsccEvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansVmkManagement: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansVmManagement <a name="DataAwsccEvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansVmManagement: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansVMotion <a name="DataAwsccEvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansVMotion: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansVSan <a name="DataAwsccEvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansVSan: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan = { ... }
```


### DataAwsccEvsEnvironmentInitialVlansVTep <a name="DataAwsccEvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentInitialVlansVTep: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep = { ... }
```


### DataAwsccEvsEnvironmentLicenseInfo <a name="DataAwsccEvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentLicenseInfo: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo = { ... }
```


### DataAwsccEvsEnvironmentServiceAccessSecurityGroups <a name="DataAwsccEvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentServiceAccessSecurityGroups: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups = { ... }
```


### DataAwsccEvsEnvironmentTags <a name="DataAwsccEvsEnvironmentTags" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentTags: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags = { ... }
```


### DataAwsccEvsEnvironmentVcfHostnames <a name="DataAwsccEvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

const dataAwsccEvsEnvironmentVcfHostnames: dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEvsEnvironmentChecksList <a name="DataAwsccEvsEnvironmentChecksList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get"></a>

```typescript
public get(index: number): DataAwsccEvsEnvironmentChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEvsEnvironmentChecksOutputReference <a name="DataAwsccEvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.impairedSince">impairedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks">DataAwsccEvsEnvironmentChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impairedSince`<sup>Required</sup> <a name="impairedSince" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```typescript
public readonly impairedSince: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentChecks;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentChecks">DataAwsccEvsEnvironmentChecks</a>

---


### DataAwsccEvsEnvironmentConnectivityInfoOutputReference <a name="DataAwsccEvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">privateRouteServerPeerings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo">DataAwsccEvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateRouteServerPeerings`<sup>Required</sup> <a name="privateRouteServerPeerings" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```typescript
public readonly privateRouteServerPeerings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentConnectivityInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentConnectivityInfo">DataAwsccEvsEnvironmentConnectivityInfo</a>

---


### DataAwsccEvsEnvironmentCredentialsList <a name="DataAwsccEvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get"></a>

```typescript
public get(index: number): DataAwsccEvsEnvironmentCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEvsEnvironmentCredentialsOutputReference <a name="DataAwsccEvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials">DataAwsccEvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentCredentials">DataAwsccEvsEnvironmentCredentials</a>

---


### DataAwsccEvsEnvironmentHostsList <a name="DataAwsccEvsEnvironmentHostsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get"></a>

```typescript
public get(index: number): DataAwsccEvsEnvironmentHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEvsEnvironmentHostsOutputReference <a name="DataAwsccEvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.placementGroupId">placementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts">DataAwsccEvsEnvironmentHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `placementGroupId`<sup>Required</sup> <a name="placementGroupId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```typescript
public readonly placementGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentHosts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentHosts">DataAwsccEvsEnvironmentHosts</a>

---


### DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep">DataAwsccEvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansEdgeVTep;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTep">DataAwsccEvsEnvironmentInitialVlansEdgeVTep</a>

---


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansExpansionVlan1;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1</a>

---


### DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansExpansionVlan2;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2</a>

---


### DataAwsccEvsEnvironmentInitialVlansHcxOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx">DataAwsccEvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansHcx;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcx">DataAwsccEvsEnvironmentInitialVlansHcx</a>

---


### DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink">DataAwsccEvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansNsxUpLink;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLink">DataAwsccEvsEnvironmentInitialVlansNsxUpLink</a>

---


### DataAwsccEvsEnvironmentInitialVlansOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.edgeVTep">edgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">expansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">expansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference">DataAwsccEvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">hcxNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">isHcxPublic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">nsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference">DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmkManagement">vmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmManagement">vmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vMotion">vMotion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference">DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vSan">vSan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference">DataAwsccEvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vTep">vTep</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans">DataAwsccEvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeVTep`<sup>Required</sup> <a name="edgeVTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```typescript
public readonly edgeVTep: DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `expansionVlan1`<sup>Required</sup> <a name="expansionVlan1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```typescript
public readonly expansionVlan1: DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `expansionVlan2`<sup>Required</sup> <a name="expansionVlan2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```typescript
public readonly expansionVlan2: DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference">DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```typescript
public readonly hcx: DataAwsccEvsEnvironmentInitialVlansHcxOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansHcxOutputReference">DataAwsccEvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `hcxNetworkAclId`<sup>Required</sup> <a name="hcxNetworkAclId" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```typescript
public readonly hcxNetworkAclId: string;
```

- *Type:* string

---

##### `isHcxPublic`<sup>Required</sup> <a name="isHcxPublic" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```typescript
public readonly isHcxPublic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nsxUpLink`<sup>Required</sup> <a name="nsxUpLink" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```typescript
public readonly nsxUpLink: DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference">DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `vmkManagement`<sup>Required</sup> <a name="vmkManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```typescript
public readonly vmkManagement: DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `vmManagement`<sup>Required</sup> <a name="vmManagement" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```typescript
public readonly vmManagement: DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference">DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `vMotion`<sup>Required</sup> <a name="vMotion" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```typescript
public readonly vMotion: DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference">DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `vSan`<sup>Required</sup> <a name="vSan" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```typescript
public readonly vSan: DataAwsccEvsEnvironmentInitialVlansVSanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference">DataAwsccEvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `vTep`<sup>Required</sup> <a name="vTep" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```typescript
public readonly vTep: DataAwsccEvsEnvironmentInitialVlansVTepOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference">DataAwsccEvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlans;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlans">DataAwsccEvsEnvironmentInitialVlans</a>

---


### DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement">DataAwsccEvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansVmkManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmkManagement">DataAwsccEvsEnvironmentInitialVlansVmkManagement</a>

---


### DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement">DataAwsccEvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansVmManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVmManagement">DataAwsccEvsEnvironmentInitialVlansVmManagement</a>

---


### DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion">DataAwsccEvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansVMotion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVMotion">DataAwsccEvsEnvironmentInitialVlansVMotion</a>

---


### DataAwsccEvsEnvironmentInitialVlansVSanOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan">DataAwsccEvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansVSan;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVSan">DataAwsccEvsEnvironmentInitialVlansVSan</a>

---


### DataAwsccEvsEnvironmentInitialVlansVTepOutputReference <a name="DataAwsccEvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep">DataAwsccEvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentInitialVlansVTep;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentInitialVlansVTep">DataAwsccEvsEnvironmentInitialVlansVTep</a>

---


### DataAwsccEvsEnvironmentLicenseInfoOutputReference <a name="DataAwsccEvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.solutionKey">solutionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.vsanKey">vsanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo">DataAwsccEvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `solutionKey`<sup>Required</sup> <a name="solutionKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```typescript
public readonly solutionKey: string;
```

- *Type:* string

---

##### `vsanKey`<sup>Required</sup> <a name="vsanKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```typescript
public readonly vsanKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentLicenseInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentLicenseInfo">DataAwsccEvsEnvironmentLicenseInfo</a>

---


### DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups">DataAwsccEvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentServiceAccessSecurityGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentServiceAccessSecurityGroups">DataAwsccEvsEnvironmentServiceAccessSecurityGroups</a>

---


### DataAwsccEvsEnvironmentTagsList <a name="DataAwsccEvsEnvironmentTagsList" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEvsEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEvsEnvironmentTagsOutputReference <a name="DataAwsccEvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags">DataAwsccEvsEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentTags">DataAwsccEvsEnvironmentTags</a>

---


### DataAwsccEvsEnvironmentVcfHostnamesOutputReference <a name="DataAwsccEvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEvsEnvironment } from '@cdktn/provider-awscc'

new dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">cloudBuilder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsx">nsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">nsxEdge1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">nsxEdge2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">nsxManager1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">nsxManager2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">nsxManager3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">sddcManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.vCenter">vCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames">DataAwsccEvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudBuilder`<sup>Required</sup> <a name="cloudBuilder" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```typescript
public readonly cloudBuilder: string;
```

- *Type:* string

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```typescript
public readonly nsx: string;
```

- *Type:* string

---

##### `nsxEdge1`<sup>Required</sup> <a name="nsxEdge1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```typescript
public readonly nsxEdge1: string;
```

- *Type:* string

---

##### `nsxEdge2`<sup>Required</sup> <a name="nsxEdge2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```typescript
public readonly nsxEdge2: string;
```

- *Type:* string

---

##### `nsxManager1`<sup>Required</sup> <a name="nsxManager1" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```typescript
public readonly nsxManager1: string;
```

- *Type:* string

---

##### `nsxManager2`<sup>Required</sup> <a name="nsxManager2" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```typescript
public readonly nsxManager2: string;
```

- *Type:* string

---

##### `nsxManager3`<sup>Required</sup> <a name="nsxManager3" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```typescript
public readonly nsxManager3: string;
```

- *Type:* string

---

##### `sddcManager`<sup>Required</sup> <a name="sddcManager" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```typescript
public readonly sddcManager: string;
```

- *Type:* string

---

##### `vCenter`<sup>Required</sup> <a name="vCenter" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```typescript
public readonly vCenter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEvsEnvironmentVcfHostnames;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEvsEnvironment.DataAwsccEvsEnvironmentVcfHostnames">DataAwsccEvsEnvironmentVcfHostnames</a>

---



