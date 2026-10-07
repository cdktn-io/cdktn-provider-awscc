# `dataAwsccNetworksecuritymanagerDeployment` Submodule <a name="`dataAwsccNetworksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworksecuritymanagerDeployment <a name="DataAwsccNetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment(scope: Construct, id: string, config: DataAwsccNetworksecuritymanagerDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig">DataAwsccNetworksecuritymanagerDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig">DataAwsccNetworksecuritymanagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworksecuritymanagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedPolicyList">associatedPolicyList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedScopeList">associatedScopeList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentArn">deploymentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentDescription">deploymentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList">DataAwsccNetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatedPolicyList`<sup>Required</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```typescript
public readonly associatedPolicyList: DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `associatedScopeList`<sup>Required</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```typescript
public readonly associatedScopeList: DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `deploymentArn`<sup>Required</sup> <a name="deploymentArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentArn"></a>

```typescript
public readonly deploymentArn: string;
```

- *Type:* string

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `deploymentDescription`<sup>Required</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```typescript
public readonly deploymentDescription: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworksecuritymanagerDeploymentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList">DataAwsccNetworksecuritymanagerDeploymentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct: dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct = { ... }
```


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct: dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct = { ... }
```


### DataAwsccNetworksecuritymanagerDeploymentConfig <a name="DataAwsccNetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerDeploymentConfig: dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_deployment#id DataAwsccNetworksecuritymanagerDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration <a name="DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration: dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration = { ... }
```


### DataAwsccNetworksecuritymanagerDeploymentTags <a name="DataAwsccNetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerDeploymentTags: dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```typescript
public get(index: number): DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```typescript
public get(index: number): DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">scopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct">DataAwsccNetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">enableCrossAccountVisibility</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableCrossAccountVisibility`<sup>Required</sup> <a name="enableCrossAccountVisibility" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```typescript
public readonly enableCrossAccountVisibility: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration">DataAwsccNetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### DataAwsccNetworksecuritymanagerDeploymentTagsList <a name="DataAwsccNetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference <a name="DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags">DataAwsccNetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworksecuritymanagerDeploymentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerDeployment.DataAwsccNetworksecuritymanagerDeploymentTags">DataAwsccNetworksecuritymanagerDeploymentTags</a>

---



