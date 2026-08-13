# `dataAwsccSecurityagentSecurityRequirementPack` Submodule <a name="`dataAwsccSecurityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentSecurityRequirementPack <a name="DataAwsccSecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack(scope: Construct, id: string, config: DataAwsccSecurityagentSecurityRequirementPackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig">DataAwsccSecurityagentSecurityRequirementPackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig">DataAwsccSecurityagentSecurityRequirementPackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentSecurityRequirementPack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId">packId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements">securityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packId`<sup>Required</sup> <a name="packId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId"></a>

```typescript
public readonly packId: string;
```

- *Type:* string

---

##### `securityRequirements`<sup>Required</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```typescript
public readonly securityRequirements: DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags"></a>

```typescript
public readonly tags: DataAwsccSecurityagentSecurityRequirementPackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentSecurityRequirementPackConfig <a name="DataAwsccSecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentSecurityRequirementPackConfig: dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack#id DataAwsccSecurityagentSecurityRequirementPack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentSecurityRequirementPackSecurityRequirements: dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements = { ... }
```


### DataAwsccSecurityagentSecurityRequirementPackTags <a name="DataAwsccSecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentSecurityRequirementPackTags: dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">evaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### DataAwsccSecurityagentSecurityRequirementPackTagsList <a name="DataAwsccSecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentSecurityRequirementPack } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentSecurityRequirementPackTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a>

---



